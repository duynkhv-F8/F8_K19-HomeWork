import axios from "axios";
const API_URL = "https://fakestoreapi.com";
const api = axios.create({
    baseURL: API_URL,
})

// api.interceptors.request.use(function (config) {
//     const token = 'fake_token';
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// })

export default api;