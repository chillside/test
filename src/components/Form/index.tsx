import classes from "./styled.module.scss";

import Select from "@/components/Select";

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
  return (
    <form className={classes.form}>
      <Select
        options={OPTIONS}
        placeholder={"Выберите тип системы"}
        name="type"
      />
    </form>
  );
};

export default Form;
