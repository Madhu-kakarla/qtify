import React from 'react'
import styles from "./Card.module.css";
import { Tooltip } from '@mui/material';
// import cardImg from "../../assets/card-img.png";
const Card = ({data, type}) => {
	switch(type) {
		case "albums": {
			const { title, follows, image, songs } = data;
			return (
				<Tooltip title={`${songs.length} songs`} placement='top' arrow>
					<div className={styles.cardContent}>
						<div className={styles.card}>
							<div className={styles.cardImage}>
								<img src={image} alt={title} loading='lazy' />
							</div>
							<div className={styles.cardText}>
								<p>{follows} Follows</p>
							</div>
						</div>
						<div className={styles.cardTitle}>{title}</div>
					</div>
				</Tooltip>
			)
		}
		case "songs": {
			const { title, likes, image} = data;
			return (
				<div className={styles.cardContent}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<img src={image} alt={title} loading='lazy' />
						</div>
						<div className={styles.cardText}>
							<p>{likes} Likes</p>
						</div>
					</div>
					<div className={styles.cardTitle}>{title}</div>
				</div>
			);
		}
		default: return <></>
	}
}

export default Card