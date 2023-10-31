import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const UserRoutes = user => {
  //   const user = useSelector(state => state.user.userData); // Assuming user data is stored in Redux store

  // Check if user is logged in and has the role of "user" or "admin"
  const isAuthorized =
    user && (user?.user?.user === 'user' || user?.user?.user === 'admin');

  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoutes;
