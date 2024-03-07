import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import classes from "./styled.module.scss";

import IconArrow from "@/assets/icon/arrow.svg?react";

const Select = ({ ...props }) => {
  const { options, placeholder, name } = props;

  const [value, setValue] = useState<any>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [label, setLabel] = useState<boolean>(
    placeholder || "Выбирите из списка"
  );

  const handleClickOutside = () => {
    setOpened(false);
  };
  const handleSetValue = (v: any, l: any) => {
    setOpened(false);
    setLabel(l);
    setValue(v);
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      className={`${classes.select} ${opened ? classes.select_opened : ""}`}
      ref={ref}
    >
      <input type={"hidden"} name={name} id={name} defaultValue={value} />
      <div className={classes.value} onClick={() => setOpened(!opened)}>
        {label}
      </div>
      <button
        type="button"
        className={` ${classes.arrow} ${opened ? classes.arrow_opened : ""}`}
      >
        <IconArrow />
      </button>
      {opened && options.length > 0 ? (
        <div className={classes.dropdownlist}>
          {options.map((item: any, index: number) => {
            return (
              <div
                className={`${classes.option} ${
                  value === item.value ? classes.option_active : ""
                }`}
                key={index}
                onClick={() => handleSetValue(item.value, item.label)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default Select;
