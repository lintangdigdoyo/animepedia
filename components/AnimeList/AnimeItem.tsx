import classNames from "classnames";
import Image from "next/image";

import style from "styles/components/Card.module.scss";

const AnimeItem = () => {
  return (
    <div className={classNames(style.card, style.card_scale)}>
      <div className={style.card__imageContainer}>
        <Image
          className={style.card__image}
          src="https://source.unsplash.com/random/340x450"
          alt="anime-title"
          sizes="240px"
          fill
        />
      </div>
      <div className={style.card__content}>
        <h5 className={style.card__title}>Anime Title</h5>
        <p className={style.card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consectetur eaque enim ut ducimus itaque.
        </p>
        <div className={style.card__row}>
          <span className={style.card__pill}>10/10</span>
          <span className={style.card__text}>Feb 2, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
