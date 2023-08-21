import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Album from "../../assets/album.png";
import styles from "./Player.module.css"

const Player = () => {
  return (
    <div className={styles.wrapper}>
			<div className={styles.albumDetails}>
				<img src={Album} alt='album' />
				<div className={styles.songDetails}>
					<h5>Song name</h5>
					<p>Album name</p>
				</div>
			</div>
			<div className={styles.player}>
				<AudioPlayer
					src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
					showSkipControls={false}
				/>
			</div>
		</div>
  )
}

export default Player