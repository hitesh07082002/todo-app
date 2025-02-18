// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';    // ✅ Place imports at the top
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Make sure there are no extra expressions like 'i;'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Ensure this function call is complete
reportWebVitals(console.log);
