import Image from "next/image";
import classNames from "classnames";

import styleCard from "styles/components/Card.module.scss";
import styleDetail from "styles/components/Detail.module.scss";
import useGetAnimeCharactersQuery from "services/hooks/useGetAnimeCharactersQuery";

interface AnimeCharactersProps {
  id: string;
}

const AnimeCharacters = ({ id }: AnimeCharactersProps) => {
  const { data } = useGetAnimeCharactersQuery(id);

  return (
    <div className={styleDetail.detail__container}>
      {data?.data.map((item) => (
        <div key={item.character.mal_id} className={styleCard.card}>
          <div className={styleCard.card__imageContainer}>
            <Image
              className={styleCard.card__image}
              src={item.character.images.webp.image_url}
              alt={item.character.name}
              width={240}
              height={210}
            />
          </div>
          <div
            className={classNames(
              styleCard.card__content,
              styleCard.card__content_center,
              styleCard.card__content_fitContent
            )}
          >
            <h5 className={styleCard.card__title}>{item.character.name}</h5>
            <span className={styleCard.card__text}>{item.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeCharacters;
