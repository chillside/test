import classes from "./styles.module.scss";
const imageUrl = "./images/c9dd3b24db3607d51897293faba562d9";

import Button from "@/components/Button";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className="container">
        <div className={classes.wrap}>
          <h1 className={classes.title}>
            <span>Lorem ipsum</span> dolor sit amet&nbsp;consectetur
            <span> adipiscing</span>
          </h1>
          <div className={classes.text}>
            <p className={classes.text_p}>
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </p>
            <ul className={classes.text_ul}>
              <li className={classes.text_li}>Totam rem aperiam eaque ipsa</li>
              <li className={classes.text_li}>
                Sit voluptatem accusantium doloremque laudantium
              </li>
              <li className={classes.text_li}>
                Sed ut perspiciatis, unde omnis iste natus error
              </li>
            </ul>
          </div>
          <footer className={classes.buttons}>
            <Button onClick={() => (window.location.href = "#order")}>
              заказать
            </Button>
            <Button variant={"white"}>подробнее</Button>
          </footer>
        </div>
      </div>

      <picture className={classes.picture}>
        <source srcSet={`${imageUrl}.avif`} type="image/avif"></source>
        <source srcSet={`${imageUrl}.webp`} type="image/webp" />
        <source srcSet={`${imageUrl}.jpg`} type="image/jpeg" />
        <img src="img.jpg" alt={"banner alt"} className={classes.img} />
      </picture>
    </section>
  );
};

export default Banner;
