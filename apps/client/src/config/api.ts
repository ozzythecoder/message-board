import axios from 'axios';
import config from '.';

const api = axios.create({
    baseURL: config.API_URL,
});

api.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export default api;
