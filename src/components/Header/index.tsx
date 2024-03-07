import classes from "./styled.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.logo}>
          LoremIpsum.<span>Net</span>
        </div>
        <nav className={classes.nav}>
          <a href="#" className={`${classes.nav_item} ${classes.active}`}>
            Бизнес
          </a>
          <a href="#" className={classes.nav_item}>
            О нас
          </a>
          <a href="#" className={classes.nav_item}>
            Цены
          </a>
          <a href="/#order" className={classes.nav_item}>
            Оформить заказ
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
