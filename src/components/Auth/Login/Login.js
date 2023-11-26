import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import styles from './Login.module.css'; // Import the CSS module
import { useNavigate, Link } from 'react-router-dom';
import loginimage from '../../../assets/images/survey.png';

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
    <div className={styles['login-main']}>
      <img className={styles['login-container-img']} src={loginimage}></img>
      <div className={styles['login-container']}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles['login-input']}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles['login-input']}
        />
        <Link to="/register" className={styles['a-link']}>Go to Register</Link>
        <button onClick={handleLogin} className={styles['login-button']}>
          Login
        </button>
      </div>
      {/* <div style={{ marginTop: '15px' }} className={styles['login-container']}>
        <h4>Login Data:</h4>
        <h6>Admin:</h6>
        <h6>sebastian@gmail.com</h6>
        <h6>Password:</h6>
        <h6>law123</h6>
        <hr />
        <h6>User:</h6>
        <h6>ywain@gmail.com</h6>
        <h6>Password:</h6>
        <h6>law123</h6>
      </div> */}
    </div>
  );
};

export default Login;
