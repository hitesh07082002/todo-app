// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'todo-app-two-pi-72.vercel.app',  // ✅ Ensure correct backend URL
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
