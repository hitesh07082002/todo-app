// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#34495e',
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-start',    // ✅ Align everything to the left
      alignItems: 'center',
      gap: '2rem'                      // ✅ Add space between all items
    }}>
      {/* ✅ Group All Links in One Flex Container */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',                // ✅ Even spacing between links
        alignItems: 'center',
      }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};

const logoutButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s',
};

export default Navbar;
