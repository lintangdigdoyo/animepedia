import Image from "next/image";

import style from "styles/components/Banner.module.scss";
import Button from "components/Common/Button";
import { AnimeInfoType } from "services/queries/types";

interface BannerProps {
  title: string;
  genres: AnimeInfoType[];
  description: string;
  imgUrl: string;
  buttonLabel?: string;
}

const Banner = ({
  title,
  genres,
  description,
  imgUrl,
  buttonLabel,
}: BannerProps) => {
  return (
    <div className={style.banner}>
      <div className={style.banner__content}>
        <h4 className={style.banner__title}>{title}</h4>
        <div className={style.banner__genresContainer}>
          {genres.map((genre) => (
            <span key={genre.mal_id} className={style.banner__genre}>
              {genre.name}
            </span>
          ))}
        </div>
        <p className={style.banner__description}>{description}</p>
        <Button variant="outlined">{buttonLabel}</Button>
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
