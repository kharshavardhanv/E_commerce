import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Componentss/auth/Login';
import Register from './Componentss/auth/Register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<App />} />
<Route path="/shop" element={<App />} />
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
