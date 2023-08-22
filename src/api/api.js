import axios from "axios";
import { albumDetails, genres, newAlbums, songs, topAlbums } from "../mockData/mockData";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fecthTopAlbums = async () => {
  try{
		const res = await axios.get(`${BACKEND_ENDPOINT}albums/top`);
		return res.data;
	} catch(err) {
		if(err.response.status === 429)
			return topAlbums
		else
			console.log(err);
	}
}

export const fetchNewAlbums = async () => {
	try{
		const res = await axios.get(`${BACKEND_ENDPOINT}albums/new`);
		return res.data;
	} catch(err){
		if(err.response.status === 429)
			return newAlbums
		else
			console.log(err);
	}
}

export const fetchSongs = async () => {
	try{
		const res = await axios.get(`${BACKEND_ENDPOINT}songs`);
		return res.data;
	} catch(err) {
		if(err.response.status === 429)
			return songs
		else
			console.log(err);
	}
}

export const fetchGenres = async () => {
	try{
		const res = await axios.get(`${BACKEND_ENDPOINT}genres`);
		return res.data;
	} catch(err) {
		if(err.response.status === 429)
			return genres
		else
			console.log(err);
	}
}

export const fetchAlbumDetails = async (slug) => {
	try{
		const res = await axios.get(`${BACKEND_ENDPOINT}album/${slug}`);
		return res.data;
	} catch(err) {
		if(err.response.status === 429)
			return albumDetails
		else
			console.log(err);
	}
}