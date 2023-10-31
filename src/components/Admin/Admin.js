import React from 'react';
import {Link} from 'react-router-dom';

import SurveyList from './SurveyList/SurveyList';
import TakenSuvey from '../Public/TakenSurveys/TakenSurvey';

import './Admin.css';

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-main">
        <div className='admin-add-container'>

          <h3 style={{}}>Admin Area</h3>
          <div className="add-survey-container">
            <div>
              <button style={{marginTop: '25px'}}>
                {' '}<Link to="/admin-addsurvey">Add Taken Surveys</Link>{' '}
              </button>
            </div>
          </div>
        </div>
        <SurveyList />
        <TakenSuvey />
      </div>
    </div>
  );
};

export default Admin;
