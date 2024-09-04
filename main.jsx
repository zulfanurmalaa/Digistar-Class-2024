import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Pastikan App diimpor dengan benar
import './index.css';  // Mengimpor file CSS global jika ada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* Pastikan komponen App dirender di sini */}
  </React.StrictMode>
);
