import axios from "axios";
// import { jwtDecode } from 'jwt-decode'

console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000
});

export default api;