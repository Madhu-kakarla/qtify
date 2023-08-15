import React from 'react';
import HeroImage from "../../assets/hero-image.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.banner}>
			<img src={HeroImage} alt='Banner' height="270" />
    </div>
  )
}

export default Hero