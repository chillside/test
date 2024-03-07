import { useState, useRef } from "react";
import classes from "./styled.module.scss";

import Select from "@/components/Select";
import Button from "@/components/Button";

import IconFile from "@/assets/icon/fileload.svg?react";

const OPTIONS = [
  { value: "1", label: "Sed ut perspiciatis" },
  { value: "2", label: "Nemo enim ipsam" },
  { value: "3", label: "Et harum quidem" },
  { value: "4", label: "Temporibus autem" },
  { value: "5", label: "Itaque earum rerum" },
  { value: "6", label: "Itaque earum rerum" },
  { value: "7", label: "Itaque earum rerum" },
  { value: "8", label: "Itaque earum rerum" },
  { value: "9", label: "Itaque earum rerum" },
];

const Form = () => {
  const [slider, setSlider] = useState<any>(75);
  const inputRef = useRef<any>(null);

  const handleFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <form className={classes.form}>
      <div className={classes.grid}>
        <fieldset className={classes.fieldset}>
          <Select
            options={OPTIONS}
            placeholder={"Выберите тип системы"}
            name="type"
          />
        </fieldset>
        <fieldset className={classes.fieldset}>
          <input
            type="email"
            name="email"
            defaultValue={""}
            placeholder="Email"
            className={classes.input}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset}>
          <input
            type="text"
            name="name"
            defaultValue={""}
            placeholder="Ваше имя"
            className={classes.input}
            required
          />
        </fieldset>
        <fieldset className={classes.fieldset_slider}>
          <div className={classes.slider}>
            <div className={classes.slider_text}>
              Sed ut perspiciatis, unde omnis iste natus
            </div>
            <div className={classes.slider_value}> {slider}%</div>
          </div>
          <input
            type="range"
            name="range"
            defaultValue={"75"}
            min="0"
            max="100"
            step="1"
            placeholder="Ваше имя"
            className={classes.input}
            required
            onChange={(e) => setSlider(e.target.value)}
          />
        </fieldset>
        <fieldset className={classes.fieldset}>
          <input
            ref={inputRef}
            type="file"
            name="file"
            id="file"
            className={classes.file_input}
          />
          <label htmlFor="file">
            <button
              type="button"
              className={classes.file_button}
              onClick={() => handleFileClick()}
            >
              <IconFile />
              Прикрепить файл
            </button>
          </label>
        </fieldset>
      </div>
      <footer className={classes.submitwrap}>
        <Button type="submit">Отправить</Button>
      </footer>
    </form>
  );
};

export default Form;
