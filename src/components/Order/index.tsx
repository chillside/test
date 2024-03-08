import classes from "./styled.module.scss";

import IconSearch from "@/assets/icon/search.svg?react";
import IconPercent from "@/assets/icon/percent.svg?react";
import IconFile from "@/assets/icon/file.svg?react";
import IconMessage from "@/assets/icon/message.svg?react";
import IconMoney from "@/assets/icon/money.svg?react";

import Form from "@/components/Form";

const STEPS = [
  { text: "Lorem ipsum dolor sit amet", icon: <IconSearch /> },
  { text: "Сonsecteturadipiscing elit", icon: <IconPercent /> },
  { text: "Sed do eiusmod tempor", icon: <IconFile /> },
  { text: "Esse cillum dolore eu fugiat", icon: <IconMessage /> },
  {
    text: "Excepteur sint occaecat cupidatat non proident",
    icon: <IconMoney />,
  },
];

const Order = () => {
  return (
    <section className={classes.order} id="order">
      <div className="container">
        <header className={classes.header}>
          <h2 className={classes.title}>
            Оформление <span>Заказа</span>
          </h2>
          <p className={classes.subtitle}>
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
        </header>
      </div>
      <div className={classes.steps}>
        {STEPS.map((item, index) => {
          return (
            <div key={index} className={classes.step}>
              <div className={classes.step_icon}>{item.icon}</div>
              <div className={classes.step_text}>{item.text}</div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <Form />
      </div>
    </section>
  );
};

export default Order;
