import axios from 'axios';
import { STORAGE_KEY } from './const';
import secureLocalStorage from 'react-secure-storage';

const baseURL = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
    baseURL, 
    timeout: 3000
});

export const apiInstanceAuth = axios.create({
    baseURL,
    timeout: 3000
})

apiInstanceAuth.interceptors.request.use((config) => {
    const session = secureLocalStorage.getItem(STORAGE_KEY)

    if (!session) {
        return config
    }

    config.headers.Authorization = `JWT ${session.token}`

    return config
})

apiInstanceAuth.interceptors.response.use((response) => response, (err) => {
    if (err?.response?.status === 400) {
        window.location.replace('/manager/sign-in')
        secureLocalStorage.removeItem(STORAGE_KEY)
    }

    return Promise.reject('Err')
})

export default apiInstance;
