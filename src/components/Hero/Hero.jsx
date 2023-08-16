import React from 'react';
import HeroImage from "../../assets/hero-image.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.banner}>
			<div>
				<h1>100 Thousand Songs, ad-free</h1>
				<h1>Over thousands podcast episodes</h1>
			</div>
			<div>
				<img src={HeroImage} alt='Banner' height="270" />
			</div>
    </div>
  )
}

export default Hero