import React from 'react'
import styles from "./Card.module.css";
import cardImg from "../../assets/card-img.png";
const Card = () => {
  return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.card}>
					<div className={styles.cardImage}>
						<img src={cardImg} alt="New Bollywood Hits" />
					</div>
					<div className={styles.cardText}>
						<button type='button'>100 Follows</button>
					</div>
				</div>
				<div className={styles.cardTitle}>
					New Bollywood
				</div>
			</div>
		</>
  )
}

export default Card