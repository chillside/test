import classes from "./styled.module.scss";
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleMenuClick = (h: any) => {
    setOpened(!opened);
    if (window) {
      window.location.href = h;
    }
  };
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.logo}>
          LoremIpsum.<span>Net</span>
        </div>
        <nav className={`${classes.nav} ${opened ? classes.nav_opened : ""}`}>
          <div
            onClick={() => handleMenuClick("#")}
            className={`${classes.nav_item} ${classes.active}`}
          >
            Бизнес
          </div>
          <div
            className={classes.nav_item}
            onClick={() => handleMenuClick("#")}
          >
            О нас
          </div>
          <div
            className={classes.nav_item}
            onClick={() => handleMenuClick("#")}
          >
            Цены
          </div>
          <div
            onClick={() => handleMenuClick("#order")}
            className={classes.nav_item}
          >
            Оформить заказ
          </div>
        </nav>
        <button
          className={`${classes.menutoggle} ${
            opened ? classes.menutoggle_opened : ""
          }`}
          onClick={() => setOpened(!opened)}
        >
          <span></span>
          <span></span>
          <span></span>
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
