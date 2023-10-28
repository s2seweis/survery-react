import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = (user) => {
  // const user = useSelector(state => state.user.userData); // Assuming user data is stored in Redux store
  // console.log("line:800", user);

  // Check if user is logged in and has the role of "user" or "admin"
  const isAuthorized = user && (user?.user?.admin === 'admin');
  // const isAuthorized = user && (user.user === 'user' || user.admin === 'admin');

  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoutes;
