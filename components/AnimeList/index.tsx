import { SwiperSlide } from "swiper/react";

import Carousel from "components/Common/Carousel";
import styleList from "styles/components/AnimeList.module.scss";
import styleCarousel from "styles/components/Carousel.module.scss";
import AnimeItem from "./AnimeItem";

const AnimeList = () => {
  return (
    <div className={styleList.list}>
      <Carousel>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <AnimeItem />
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <AnimeItem />
        </SwiperSlide>
      </Carousel>
    </div>
  );
};

export default AnimeList;
