import classes from "./styled.module.scss";
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.logo}>
          LoremIpsum.<span>Net</span>
        </div>
        <nav className={`${classes.nav} ${opened ? classes.nav_opened : ""}`}>
          <a href="#" className={`${classes.nav_item} ${classes.active}`}>
            Бизнес
          </a>
          <a href="#" className={classes.nav_item}>
            О нас
          </a>
          <a href="#" className={classes.nav_item}>
            Цены
          </a>
          <a href="#order" className={classes.nav_item}>
            Оформить заказ
          </a>
        </nav>
        <button
          className={classes.menutoggle}
          onClick={() => setOpened(!opened)}
        >
          menu
        </button>
        {opened ? (
          <div
            className={classes.overlay}
            onClick={() => setOpened(false)}
          ></div>
        ) : null}
      </div>
    </header>
  );
};
export default Header;
