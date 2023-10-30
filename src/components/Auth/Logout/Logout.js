import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/auth';
import {useNavigate, Link} from 'react-router-dom';


import styles from './Logout.module.css';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        // <p>Login</p>
        <button onClick={handleLogout}>Login</button>
      )}
    </div>
  );
};

export default Logout;
