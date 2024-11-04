import axios from "axios";

const API_BASE_URL = "https://mmo-games.p.rapidapi.com";
const RAPIDAPI_HOST = "mmo-games.p.rapidapi.com";
const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-rapidapi-host": RAPIDAPI_HOST,
    "x-rapidapi-key": RAPIDAPI_KEY,
  },
});

//Fetch News

export const fetchNews = async () => {
    try {
        const res = await axiosInstance.get(`${API_BASE_URL}/latestnews`);
        return res.data;

    } catch (error) {
        console.error('Error Fetching News:', error);
        return [];
    }
};

//Fetch Giveaways

export const fetchGiveaways = async () => {
    try {
        const res = await axiosInstance.get(`${API_BASE_URL}/giveaways`);
        return res.data;

    } catch (error) {
        console.error('Error Fetching Giveaways:', error);
        return [];
    }
};

export const fetchLatestMMOs = async () => {
    try {
        const res = await axiosInstance.get(`${API_BASE_URL}/games?sort-by=release-date`);
        return res.data;
        
    } catch (error) {
        console.error('Error Fetching Latest MMOs', error);
        return [];
    }
}