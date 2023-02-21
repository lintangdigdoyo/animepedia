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
  onClickButton?: () => void;
}

const Banner = ({
  title,
  genres,
  description,
  imgUrl,
  buttonLabel,
  isLoading,
  fullText = false,
  onClickButton,
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
        <h4 className={style.banner__title} data-testid="title">
          {title}
        </h4>
        <div className={style.banner__genresContainer}>
          {genres.map((genre) => (
            <span
              key={genre.mal_id}
              className={style.banner__genre}
              data-testid={`genre-${genre.mal_id}`}
            >
              {genre.name}
            </span>
          ))}
        </div>
        {description && (
          <p
            className={classNames(style.banner__description, {
              [style.banner__description_fullText]: fullText,
            })}
            data-testid="description"
          >
            {description}
          </p>
        )}
        {onClickButton && (
          <Button
            variant="outlined"
            onClick={onClickButton}
            data-testid="banner-button"
          >
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
        data-testid="image"
      />
    </div>
  );
};

export default Banner;
