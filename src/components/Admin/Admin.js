import React from 'react';
import { Link } from 'react-router-dom';

import SurveyList from './SurveyList/SurveyList';

import './Admin.css';

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-main">
        <h3 style={{}}>Admin Area</h3>
        <div className='add-survey-container'>
          <div>
            <button style={{marginTop:"25px"}}> <Link to="/admin-addsurvey">Add a new Survey</Link> </button>
          </div>
        </div>
        <SurveyList />
      </div>
    </div>
  );
};

export default Admin;
