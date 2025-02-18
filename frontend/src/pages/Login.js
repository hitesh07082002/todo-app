// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../api/axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');
      window.location.href = '/dashboard';
    } catch (error) {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px'
        }}>
          Login
        </button>
      </form>
      {/* ✅ Add Password Reset Link */}
      <p style={{ marginTop: '1rem' }}>
        Forgot Password? <Link to="/reset-password" style={{ color: '#3498db' }}>Reset Here</Link>
      </p>
    </div>
  );
}

export default Login;
