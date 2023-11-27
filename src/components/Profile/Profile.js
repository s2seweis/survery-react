/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/actions/user';
import styles from './Profile.module.css'; // Import the CSS module

const UserForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);

  const dataid = userData.userId;

  const [formData, setFormData] = useState(userData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update data in Firestore
      await dispatch(updateUserData(dataid, formData));

      console.log('Document updated successfully');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={styles.formContainer} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        User Role:
        <select
          className={styles.selectField}
          name="admin"
          value={formData.admin}
          onChange={handleInputChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <label className={styles.label}>
        Email:
        <input
          className={styles.inputField}
          disabled
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        Name:
        <input
          className={styles.inputField}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          className={styles.inputField}
          disabled
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        User ID:
        <input
          className={`${styles.inputField} ${styles.disabledInput}`}
          disabled
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
        />
      </label>
      <button className={styles.submitButton} type="submit">
        Update User Data
      </button>
    </form>
  );
};

export default UserForm;
