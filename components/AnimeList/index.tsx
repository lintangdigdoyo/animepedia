import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import dayjs from "dayjs";

import styleList from "styles/components/AnimeList.module.scss";
import styleCarousel from "styles/components/Carousel.module.scss";
import styleInput from "styles/components/Input.module.scss";
import { useGetAnimeSearchQuery } from "services/hooks";
import { AnimeSearchParamsType } from "services/queries/types";
import Carousel from "components/Common/Carousel";
import AnimeItem from "./AnimeItem";
import AnimeListSkeleton from "./AnimeListSkeleton";

interface AnimeListProps {
  title: string;
  animeSearchParams: AnimeSearchParamsType;
  searchPlaceholder?: string;
  isMobile?: boolean;
}

const AnimeList = ({
  title,
  animeSearchParams,
  searchPlaceholder,
  isMobile,
}: AnimeListProps) => {
  const { data, isLoading, fetchNextPage } =
    useGetAnimeSearchQuery(animeSearchParams);

  const handleSlideChange = async (swiper: Swiper) => {
    if (!swiper.isEnd || !data?.pagination.has_next_page) return;
    fetchNextPage({
      ...animeSearchParams,
      page: data.pagination.current_page + 1,
    });
  };

  if (isLoading) return <AnimeListSkeleton totalCard={isMobile ? 1 : 5} />;

  return (
    <section className={styleList.list}>
      <div className={styleList.list__header}>
        <h4 className={styleList.list__title}>{title}</h4>
        <div className={styleList.list__search}>
          <input
            className={styleInput.input}
            type="text"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>
      <Carousel onSlideChange={handleSlideChange}>
        {data?.data.map((anime) => (
          <SwiperSlide
            key={anime.mal_id}
            className={styleCarousel.carousel__item}
          >
            <AnimeItem
              title={anime.titles[0].title}
              description={anime.synopsis}
              rating={anime.score + "/10"}
              date={dayjs(anime.aired.from).format("MMM D, YYYY")}
              imgUrl={anime.images.webp.image_url}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default AnimeList;
