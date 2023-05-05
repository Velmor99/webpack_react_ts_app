import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return <>
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<LoginPage />}>
        </Route>
    </Routes>
    <AlertNotification />
  </>;
}

export default App;
