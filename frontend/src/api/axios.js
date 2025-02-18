// src/api/axios.js
// frontend/src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://todo-app-two-pi-72.vercel.app', // ✅ Use .env or fallback
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
