import { SwiperSlide } from "swiper/react";

import Carousel from "components/Common/Carousel";
import styleList from "styles/components/AnimeList.module.scss";
import styleCarousel from "styles/components/Carousel.module.scss";

const AnimeList = () => {
  return (
    <div className={styleList.list}>
      <Carousel>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>1</div>
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>2</div>
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>3</div>
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>4</div>
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>5</div>
        </SwiperSlide>
        <SwiperSlide className={styleCarousel.carousel__item}>
          <div>6</div>
        </SwiperSlide>
      </Carousel>
    </div>
  );
};

export default AnimeList;
