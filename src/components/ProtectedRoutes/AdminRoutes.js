import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = (user) => {
  // Check if user is logged in and has the role of "user" or "admin"
  const isAuthorized = user && (user?.user?.user === 'admin');

  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
