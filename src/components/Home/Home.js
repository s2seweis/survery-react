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
  const greeting = `Welcome to My Survey App, ${name}`;
  const expression = `Current Routes for ${capitalizedString}:`;
  const expression1 = 'Current Routes for User';

  return (
    <div className="home-layer">
      <h1 className="main-heading">{greeting}</h1>

      {userData.user === 'admin' ? (
        <div className="admin-container">
          <h4 className="sub-heading">{expression}</h4>
          <div className="overview-container">
            <Link to="/admin" className="nav-link hover-effect">Admin</Link>
            <Link to="/admin-addsurvey" className="nav-link hover-effect">Add Survey</Link>
            <Link to="/admin/available-surveys" className="nav-link hover-effect">Edit Surveys Admin</Link>
            <Link to="/overview-charts" className="nav-link hover-effect">Playground Charts.js</Link>
          </div>
          <h4 className="sub-heading">{expression1}</h4>
          <div className="overview-container">
            <Link to="/" className="nav-link hover-effect">Home</Link>
            <Link to="/taken-surveys" className="nav-link hover-effect">Taken Surveys</Link>
            <Link to="/available-surveys" className="nav-link hover-effect">Available Surveys User</Link>
            <Link to="/help" className="nav-link hover-effect">Help</Link>
            <Link to="/register" className="nav-link hover-effect">Register</Link>
            <Link to="/login" className="nav-link hover-effect">Login</Link>
            <Link to="/profile" className="nav-link hover-effect">Profile</Link>
          </div>
        </div>
      ) : (
        <div className="user-container">
          <h4 className="sub-heading">{expression}</h4>
          <div className="overview-container">
            <Link to="/" className="nav-link hover-effect">Home</Link>
            <Link to="/taken-surveys" className="nav-link hover-effect">Taken Surveys</Link>
            <Link to="/available-surveys" className="nav-link hover-effect">Available Surveys User</Link>
            <Link to="/help" className="nav-link hover-effect">Help</Link>
            <Link to="/register" className="nav-link hover-effect">Register</Link>
            <Link to="/login" className="nav-link hover-effect">Login</Link>
            <Link to="/profile" className="nav-link hover-effect">Profile</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
