import React from 'react';
import {Outlet, Navigate } from 'react-router-dom';
const PrivateRoutes2 = () => {

      const user = localStorage.getItem('user');
      return user ? <Outlet /> : <Navigate to="/userlogin" />;
  
}
export default PrivateRoutes2;