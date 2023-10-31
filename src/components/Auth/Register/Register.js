import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/auth';
import styles from './Register.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [emailMismatch, setEmailMismatch] = useState(false);

  const handleRegister = () => {
    if (email === emailConfirmation) {
      dispatch(register(email, name, password));
      // Reset fields after successful registration if needed
      setName('');
      setEmail('');
      setEmailConfirmation('');
      setPassword('');
      setEmailMismatch(false);
    } else {
      setEmailMismatch(true);
    }
  };

  return (
    <div className={styles['register-container']}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles['register-input']}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles['register-input']}
      />
      <input
        type="email"
        placeholder="Confirm Email"
        value={emailConfirmation}
        onChange={e => setEmailConfirmation(e.target.value)}
        className={styles['register-input']}
      />
      {emailMismatch && <div className={styles['error-message']}>Email confirmation does not match.</div>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={styles['register-input']}
      />
      <Link to="/login" className={styles['a-link']}>Go to Login</Link>
      <button onClick={handleRegister} className={styles['register-button']}>
        Register
      </button>
    </div>
  );
};

export default Register;
