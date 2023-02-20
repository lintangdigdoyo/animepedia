import classNames from "classnames";
import Image from "next/image";

import style from "styles/components/Card.module.scss";

interface AnimeItemProps {
  title: string;
  description: string;
  rating: string;
  date: string;
  imgUrl: string;
}

const AnimeItem = ({
  title,
  description,
  rating,
  date,
  imgUrl,
}: AnimeItemProps) => {
  return (
    <div className={classNames(style.card, style.card_scale)}>
      <div className={style.card__imageContainer}>
        <Image
          className={style.card__image}
          src={imgUrl}
          alt={title}
          sizes="240px"
          fill
        />
      </div>
      <div className={style.card__content}>
        <h5 className={style.card__title}>{title}</h5>
        <p className={style.card__description}>{description}</p>
        <div className={style.card__row}>
          <span className={style.card__pill}>{rating}</span>
          <span className={style.card__text}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
