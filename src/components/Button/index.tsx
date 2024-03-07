import classes from "./styled.module.scss";

const Button = ({ children, ...props }: any) => {
  const variant = props.variant || "";
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button}  ${variant ? classes[variant] : ""}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
