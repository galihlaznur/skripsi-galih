import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
    baseURL: VITE_API_URL, 
    timeout: 3000
});

export default apiInstance;
