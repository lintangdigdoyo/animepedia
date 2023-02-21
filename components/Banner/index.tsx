import Image from "next/image";
import classNames from "classnames";

import style from "styles/components/Banner.module.scss";
import Button from "components/Common/Button";
import { AnimeInfoType } from "services/queries/types";

interface BannerProps {
  title: string;
  genres: AnimeInfoType[];
  imgUrl: string;
  description?: string;
  buttonLabel?: string;
  isLoading?: boolean;
  fullText?: boolean;
  onClick?: () => void;
}

const Banner = ({
  title,
  genres,
  description,
  imgUrl,
  buttonLabel,
  isLoading,
  fullText = false,
  onClick,
}: BannerProps) => {
  if (isLoading) {
    return (
      <div
        className={classNames(style.banner, style.banner__skeleton)}
        data-testid="banner-skeleton"
      />
    );
  }

  return (
    <div className={style.banner}>
      <div
        className={classNames(style.banner__content, {
          [style.banner__content_fullText]: fullText,
        })}
      >
        <h4 className={style.banner__title}>{title}</h4>
        <div className={style.banner__genresContainer}>
          {genres.map((genre) => (
            <span key={genre.mal_id} className={style.banner__genre}>
              {genre.name}
            </span>
          ))}
        </div>
        {description && (
          <p
            className={classNames(style.banner__description, {
              [style.banner__description_fullText]: fullText,
            })}
          >
            {description}
          </p>
        )}
        {onClick && (
          <Button variant="outlined" onClick={onClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
      <Image
        className={style.banner__image}
        src={imgUrl}
        alt={title}
        fill
        priority
      />
    </div>
  );
};

export default Banner;
