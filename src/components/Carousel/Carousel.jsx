import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav/CarouselRightNav";
import "swiper/css";
import styles from "./Carousel.module.css";

const Controls = ({data}) => {
	const swiper = useSwiper();

	useEffect(() => {
		swiper.slideTo(0, null);
	},[data])
}

const Carousel = ({data, component}) => {

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
				spaceBetween={30}
				allowTouchMove
      >
				<Controls data={data} />
				<CarouselLeftNav />
				<CarouselRightNav />
				{ data.map(item => {
					return (
						<SwiperSlide key={item.id}>{component(item)}</SwiperSlide>
					)
				})}
			</Swiper>
    </div>
  );
};

export default Carousel;
