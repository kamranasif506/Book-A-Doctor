import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  let auth = false;
  if (token) {
    auth = true;
  }

  // const auth = token ? true : false;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
