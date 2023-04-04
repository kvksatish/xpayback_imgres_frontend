import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Dashboard from './Dashboard';
import Hof from '../Components/Hof';
import AllImages from './AllImages';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Hof><Dashboard /></Hof>} />
      <Route path="/allimgs" element={<Hof><AllImages /></Hof>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default Allroutes;
