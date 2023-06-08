import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({ baseURL });

const requests = {
    get: (url, config) => axiosInstance.get(url, { ...config }),

    post: (url, body, config) => axiosInstance.post(url, body, { ...config }),
};

export default requests;
