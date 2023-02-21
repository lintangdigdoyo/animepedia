import { Swiper, SwiperProps, SwiperRef } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "styles/components/Carousel.module.scss";

interface CarouselProps extends SwiperProps {
  children: React.ReactNode;
  innerRef: React.Ref<SwiperRef>;
}

const Carousel = ({ children, innerRef, ...restProps }: CarouselProps) => {
  return (
    <Swiper
      ref={innerRef}
      className={style.carousel}
      slidesPerView={1}
      spaceBetween={24}
      navigation
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        890: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1355: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      {...restProps}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
