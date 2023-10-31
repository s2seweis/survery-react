import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const userData = useSelector(state => state.user.userData);
  const name = userData.name;
  const role = userData.user;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const capitalizedString = capitalizeFirstLetter(role);
  const greeting = `Welcome to my survey app, ${name}`;
  const expression = `Current routes for, ${capitalizedString}:`;

  return (
    <div className="home-layer" style={{ position: 'absolute', width: '100%', marginTop: '' }}>
      <h1>{greeting}</h1>

      {userData.user === 'admin' ? (
        <div className="admin-container">
          <h4 style={{ marginTop: '50px' }}>{expression}</h4>
          <div className="admin-overview" style={{ display: 'grid', width: '300px', margin: 'auto' }}>
            <hr />
            <Link to="/admin">Admin</Link>
            <Link to="/admin-addsurvey">Add Survey</Link>
            <Link to="/admin/available-surveys">Edit Surveys Admin</Link>
            <Link to="/overview-charts">Playground Charts.js</Link>
          </div>
          <div className="user-overview" style={{ display: 'grid', width: '300px', margin: 'auto' }}>
            <hr />
            <Link to="/">Home</Link>
            <Link to="/taken-surveys">Taken Surveys</Link>
            <Link to="/available-surveys">Available Surveys User</Link>
            <Link to="/help">Help</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      ) : (
        <div className="user-container">
          <h4 style={{ marginTop: '50px' }}>{expression}</h4>
          <div className="user-overview" style={{ display: 'grid', width: '300px', margin: 'auto' }}>
            <hr />
            <Link to="/">Home</Link>
            <Link to="/taken-surveys">Taken Surveys</Link>
            <Link to="/available-surveys">Available Surveys User</Link>
            <Link to="/help">Help</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
