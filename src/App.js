import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Grid from "./components/Grid/Grid";
import Faqs from "./components/Faqs/Faqs";
import { fecthTopAlbums, fetchGenres, fetchNewAlbums, fetchSongs } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [tabStatus, setTabStatus] = useState("all");

  const generateData = async(type) => {
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
        case "songs": {
          const res = await fetchSongs();
          setSongsData(res);
          setFilteredSongs(res);
          const resp = await fetchGenres();
          setGenres(resp.data);
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
    generateData("songs");
  }, [])

  const handleTabs = (tab) => {
    setTabStatus(tab)
    if(tab === "all"){
      setFilteredSongs(songsData)
    } else {
      const filteredSongs = songsData.filter(ele => ele.genre.key === tab);
      setFilteredSongs(filteredSongs);
    }
  }

  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Grid title="Top Albums" data={topAlbumsData} type="albums" />
        <Grid title="New Albums" data={newAlbumsData} type="albums" />
        <hr className={styles.horizLine} />
        <Grid title="Songs" data={filteredSongs} type="songs" genres={genres} tabStatus={tabStatus} handleTabs={handleTabs} />
        <hr className={styles.horizLine} />
        <Faqs />
      </div>
    </>
  );
}

export default App;
