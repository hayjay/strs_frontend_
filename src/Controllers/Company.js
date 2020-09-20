import axios from 'axios';

axios.defaults.headers.common["Authorization"] = localStorage.getItem('x-access-token');

export const API_BASE_URL = "http://127.0.0.1:8050/api";

export function companyCreate(company_data) {
    return axios.post(`${API_BASE_URL}/company/create`, company_data)
        .then(response => {
            return response.data;
        })
        .catch(err => Promise.reject(err.response ? err.response.data ? err.response.data.message: err.response.status: err.message));
}