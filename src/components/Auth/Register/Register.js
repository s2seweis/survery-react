import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/auth';
import styles from './Register.module.css'; // Import the CSS module

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(register(email, password));
  };

  return (
    <div className={styles['register-container']}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles['register-input']}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles['register-input']}
      />
      <button onClick={handleRegister} className={styles['register-button']}>
        Register
      </button>
    </div>
  );
};

export default Register;
