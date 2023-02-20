import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import dayjs from "dayjs";

import Carousel from "components/Common/Carousel";
import AnimeItem from "./AnimeItem";
import styleList from "styles/components/AnimeList.module.scss";
import styleCarousel from "styles/components/Carousel.module.scss";
import styleInput from "styles/components/Input.module.scss";
import { useGetAnimeSearchQuery } from "services/hooks";

const AnimeList = () => {
  const { data, fetchNextPage } = useGetAnimeSearchQuery({
    limit: 10,
  });

  const handleSlideChange = async (swiper: Swiper) => {
    if (!swiper.isEnd || !data?.pagination.has_next_page) return;
    fetchNextPage({
      limit: 10,
      page: data.pagination.current_page + 1,
    });
  };

  return (
    <div className={styleList.list}>
      <div className={styleList.list__header}>
        <h4 className={styleList.list__title}>Anime List</h4>
        <div className={styleList.list__search}>
          <input className={styleInput.input} type="text" />
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
    </div>
  );
};

export default AnimeList;
