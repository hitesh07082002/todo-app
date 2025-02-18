// src/pages/ResetPassword.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../api/axios';

function ResetPassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/reset-password', {
        username,
        newPassword,
      });
      toast.success(response.data.message);
      setUsername('');
      setNewPassword('');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to reset password'
      );
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Reset Password</h2>
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
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit" style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px'
        }}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
