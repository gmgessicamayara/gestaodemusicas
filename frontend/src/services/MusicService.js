import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/musics'

export const listMusic = () => axios.get(REST_API_URL);

export const createMusic = (music) => axios.post(REST_API_URL, music);

export const updateMusic = (musicId, music) => axios.put(REST_API_URL + '/' + musicId, music);

export const getMusic = (musicId) => axios.get(REST_API_URL + '/' + musicId);

export const deleteMusic = (musicId) => axios.delete(REST_API_URL + '/' + musicId);


