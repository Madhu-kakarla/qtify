import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './Album.module.css';
import { fecthTopAlbums, fetchAlbumDetails, fetchNewAlbums } from '../../api/api';
import NavBar from '../NavBar/NavBar';
import { ArrowCircleLeftRounded, Shuffle, LibraryAdd } from '@mui/icons-material';
import Player from '../Player/Player';
import { Button } from '@mui/material';
import SongsTable from '../SongsTable/SongsTable';

const Album = () => {
  const { slug } = useParams();
	const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
	const [albumData, setAlbumData] = useState();

	const generateData = async (type) => {
		try{
      switch(type){
        case "top-albums": {
          const res = await fecthTopAlbums();
          setTopAlbumsData(res);
        }
        break;
        case "new-albums": {
          const res = await fetchNewAlbums();
          setNewAlbumsData(res);
        }
        break;
				case "albumDetails": {
					const res = await fetchAlbumDetails(slug);
					setAlbumData(res);
				}
				break;
       default: return []
      }
    } catch(err){
      console.error(err);
    }
	}

	useEffect(() => {
		generateData("top-albums");
    generateData("new-albums");
		generateData("albumDetails");
	}, []);

	function calculateDuration(ms) {
		let sum = 0;
		ms.map(secs => sum+= secs);
		let mins = Math.floor((sum/1000/60) << 0)
		let hrs = Math.floor(mins/60);
		if(hrs > 0)
			return `${hrs}hrs ${mins}mins`

		return `${mins}mins` 
	}

	const albums = topAlbumsData.concat(newAlbumsData);

  return (
    <div className={styles.wrapper}>
			<NavBar albums={albums} />
			{albumData && (
				<>
					<div className={styles.albumContainer}>
						<Link to="/" className={styles.backLink} title='Back to Home'><ArrowCircleLeftRounded fontSize='large' /></Link>
						<div className={styles.heroWrapper}>
							<img src={albumData.image} alt={albumData.title} height="200" />
							<div className={styles.heroDetails}>
								<h2>{albumData.title}</h2>
								<p>{albumData.description}</p>
								<ul>
									<li>{albumData.songs.length} songs</li>
									<li>{calculateDuration(albumData.songs.map(song => song.durationInMs))}</li>
									<li>{`${albumData.follows} Follows`}</li>
								</ul>
								<div className={styles.buttonContainer}>
									<Button variant='contained' color='success'> <Shuffle sx={{paddingRight: "0.25rem"}} /> Shuffle</Button>
									<Button variant='outlined' color='success'> <LibraryAdd sx={{paddingRight: "0.25rem"}} /> Add to library</Button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			{albumData && (<SongsTable songsData={albumData.songs} />)}
			<Player />
		</div>
  )
}

export default Album