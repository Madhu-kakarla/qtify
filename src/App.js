import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Grid from "./components/Grid/Grid";
import { fecthTopAlbums, fetchNewAlbums } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const getTopAlbumsData = async() => {
    try{
      const res = await fecthTopAlbums();
      setTopAlbumsData(res);
    } catch(err) {
      console.error(err);
    }
  }

  const getNewAlbumsData = async() => {
    try{
      const res = await fetchNewAlbums();
      setNewAlbumsData(res);
    } catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    getTopAlbumsData();
    getNewAlbumsData();
  }, [])
  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Grid title="Top Albums" data={topAlbumsData} type="albums" />
        <Grid title="New Albums" data={newAlbumsData} type="albums" />
      </div>
    </>
  );
}

export default App;
