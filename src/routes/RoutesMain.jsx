// src/routes/RoutesMain.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/Register/RegisterPage';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

    </Routes>
  );
};

export default RoutesMain;
