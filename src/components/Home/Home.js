import React, {useEffect, useState} from 'react';

import Logout from '../Auth/Logout/Logout';

const Home = ({match}) => {
  return (
    <div
      className="home-layer"
      style={{position: 'absolute', width: '100%', marginTop: ''}}
    >

      <h1>Welcome to my survey app!</h1>
      <h3>Current routes and structure:</h3>

      <h4 style={{marginTop: '50px'}}>Admin</h4>
      <div
        className="admin-overview"
        style={{display: 'grid', width: '300px', margin: 'auto'}}
      >
        <hr />
        <a href="/admin">Admin</a>
        <a href="/admin-addsurvey">Add Survey</a>
        <a href="/admin/available-surveys">Edit Surveys Admin</a>
        <a href="/playground">Playground Charts.js</a>

      </div>

      <h4 style={{marginTop: '50px'}}>User</h4>
      <div
        className="user-overview"
        style={{display: 'grid', width: '300px', margin: 'auto'}}
      >
        <hr />
        <a href="/">Home</a>
        <a href="/taken-surveys">Taken Surveys</a>
        <a href="/available-surveys">Available Surveys User</a>
        <a href="/help">Help</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </div>

      <div style={{marginTop:"100px"}}>
      <Logout />
      </div>

    </div>
  );
};

export default Home;
