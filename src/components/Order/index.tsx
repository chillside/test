import classes from "./styled.module.scss";

import IconSearch from "@/assets/icon/search.svg?react";

const STEPS = [
  { text: "Lorem ipsum dolor sit amet", icon: <IconSearch /> },
  { text: "Сonsecteturadipiscing elit", icon: <IconSearch /> },
  { text: "Sed do eiusmod tempor", icon: <IconSearch /> },
  { text: "Esse cillum dolore eu fugiat", icon: <IconSearch /> },
  {
    text: "Excepteur sint occaecat cupidatat non proident",
    icon: <IconSearch />,
  },
];

const Order = () => {
  return (
    <section className={classes.order}>
      <div className="container">
        <header>
          <h2 className={classes.title}>
            Оформление <span>Заказа</span>
          </h2>
          <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
        </header>

        <div className={classes.steps}>
          {STEPS.map((item, index) => {
            return <div key={index}>{item.text}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Order;
