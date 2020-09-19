import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.common["Authorization"] = localStorage.getItem('x-access-token');

export const API_BASE_URL = "http://127.0.0.1:8050/api";

export function login(user_data) {
    return axios.post(`${API_BASE_URL}/user/login`, user_data)
        .then(response => {
            localStorage.setItem('x-access-token', response.data.token);
            let numberOfSessionHours = process.env.SESSION_HOURS;
            let date = Date.now() + numberOfSessionHours * 60 * 60 * 1000;
            localStorage.setItem('x-access-token-expiration-date', date);
            return response.data; //return response from the API endpoint
        })
        .catch(error => Promise.reject(error));
}