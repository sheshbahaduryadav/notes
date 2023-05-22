import React from 'react'
import {Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () => {

      const admin = localStorage.getItem('admins');
      return admin ? <Outlet /> : <Navigate to="/adminlogin" />;
  
}

export default PrivateRoute;
