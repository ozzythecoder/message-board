import axios from 'axios';
import config from '.';

const api = axios.create({
    baseURL: config.API_URL,
});

api.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message;
        const responseURL = error.request?.responseURL || '[no URL available]';
        console.log('AxiosError for request to', responseURL);
        console.log(message);
        return Promise.reject(error);
    },
);

export default api;
