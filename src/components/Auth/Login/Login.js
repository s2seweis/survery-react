import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import styles from './Login.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login(email, password));
    navigate('/');
  };
  
  return (
    <div className={styles['login-container']}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles['login-input']}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles['login-input']}
      />
      <a className={styles['a-link']} href='/register'> Go to Register</a>
      <button onClick={handleLogin} className={styles['login-button']}>
        Login
      </button>
    </div>
  );
};

export default Login;
