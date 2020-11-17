import axios from 'axios';

const BASE_URL = "https://water-my-plant-app.herokuapp.com/";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: 'Bearer ${token}'
        },
        baseURL: BASE_URL
    });
};