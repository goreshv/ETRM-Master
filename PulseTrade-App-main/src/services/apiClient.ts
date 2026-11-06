import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://etrm-master-backend.onrender.com', // Production backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
