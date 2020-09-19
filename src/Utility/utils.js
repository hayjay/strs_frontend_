import axios from 'axios';

axios.defaults.headers.common["Authorization"] = localStorage.getItem('x-access-token');

export const API_BASE_URL = "http://127.0.0.1:8050/api";

export function login(user_data) {
    return axios.post(`${API_BASE_URL}/user/login`, user_data)
        .then(response => {
            localStorage.setItem('x-access-token', response.data.token);
            let numberOfSessionHours = 3;
            let date = Date.now() + numberOfSessionHours * 60 * 60 * 1000;
            localStorage.setItem('x-access-token-expiration', date);
            return response.data; //return response from the API endpoint
        })
        .catch(error => Promise.reject(error));
}

export function isAuthenticated(){
    /**
     * Basically return true if user is authenticated - This checks if user has a session token stored in the header
     * Also, this method compares if the expiration token date that has been set during the login is more than today - Read the login method for better understanding.
    */
    return localStorage.getItem('x-access-token') && (localStorage.getItem('x-access-token-expiration') > Date.now());
}