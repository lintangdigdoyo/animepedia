import { SwiperSlide } from "swiper/react";

import Carousel from "components/Common/Carousel";
import AnimeItem from "./AnimeItem";
import styleList from "styles/components/AnimeList.module.scss";
import styleCarousel from "styles/components/Carousel.module.scss";
import styleInput from "styles/components/Input.module.scss";

const AnimeList = () => {
  return (
    <div className={styleList.list}>
      <div className={styleList.list__header}>
        <h4 className={styleList.list__title}>Anime List</h4>
        <div className={styleList.list__search}>
          <input className={styleInput.input} type="text" />
        </div>
      </div>
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
