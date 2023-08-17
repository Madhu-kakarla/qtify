import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../../assets/rightArrow.svg';
import styles from "./CarouselRightNav.module.css"

const CarouselRightNav = () => {
  const swiper = useSwiper();
	const [isEnd, setIsEnd] = useState(swiper.isEnd);
	useEffect(() => {
		swiper.on("slideChange", function (){
			setIsEnd(swiper.isEnd);
		},[])
	})

  return (
    <div className={styles.rightNav}>
			{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
		</div>
  )
}

export default CarouselRightNav