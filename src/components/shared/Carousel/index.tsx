import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  delay?: number;
  slidesPerView?: number;
}

export default function Carousel({
  items,
  autoplay = true,
  delay = 4000,
  slidesPerView = 1,
}: CarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      loop={true}
      autoplay={
        autoplay
          ? {
              delay,
              disableOnInteraction: false,
            }
          : false
      }
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
