import classes from "./styled.module.scss";

import IconQiwi from "@/assets/icon/wallets/qiwi.svg?react";
import IconYandex from "@/assets/icon/wallets/yandex.svg?react";
import IconWebmoney from "@/assets/icon/wallets/webmoney.svg?react";
import IconVk from "@/assets/icon/vk.svg?react";
import IconEmail from "@/assets/icon/email.svg?react";

const WALLET = [
  { name: "Qiwi wallet", href: "#qiwi", icon: <IconQiwi /> },
  { name: "Yandex Money", href: "#yandexmoney", icon: <IconYandex /> },
  { name: "Web Money", href: "#webmoney", icon: <IconWebmoney /> },
];

const SOCIAL = [
  {
    name: "info@ipsum228.com",
    href: "mailto:info@ipsum228.com",
    icon: <IconEmail />,
  },
  { name: "Мы вконтакте", href: "vk.com", icon: <IconVk /> },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.copy}>
          &copy; 2018 «LOERMOPSUM.NET Все права защищены.
        </div>
        <div className={classes.border}></div>
        <div className={classes.wallets}>
          {WALLET.map((item, index) => {
            return (
              <a
                href={item.href ? item.href : "#"}
                key={index}
                className={classes.wallet}
              >
                <div className={classes.icon}>{item.icon}</div>
                {item.name}
              </a>
            );
          })}
        </div>
        <div className={classes.border}></div>
        <div className={classes.socials}>
          {SOCIAL.map((item, index) => {
            return (
              <a
                href={item.href ? item.href : "#"}
                key={index}
                className={classes.social}
              >
                <div className={classes.icon}>{item.icon}</div>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
