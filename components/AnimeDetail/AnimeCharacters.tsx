import Image from "next/image";
import classNames from "classnames";

import styleCard from "styles/components/Card.module.scss";
import styleDetail from "styles/components/Detail.module.scss";

const AnimeCharacters = () => {
  return (
    <div className={styleDetail.detail__container}>
      <div className={styleCard.card}>
        <div className={styleCard.card__imageContainer}>
          <Image
            className={styleCard.card__image}
            src="https://source.unsplash.com/random"
            alt="anime title"
            sizes="240px"
            fill
          />
        </div>
        <div
          className={classNames(
            styleCard.card__content,
            styleCard.card__content_center
          )}
        >
          <h5 className={styleCard.card__title}>Anime Name</h5>
        </div>
      </div>
    </div>
  );
};

export default AnimeCharacters;
