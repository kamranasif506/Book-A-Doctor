import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  let auth = false;
  if (token) {
    auth = true;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
