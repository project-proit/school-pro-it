import axios from "axios";

export const customAxios = axios.create({
    baseURL: "http://localhost:4200/api/v1",
    withCredentials: true,
    headers: {
        // 'Access-Control-Allow-Origin': 'http://10.60.112.48:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
});

const token = localStorage.getItem('authToken');

customAxios.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default customAxios;