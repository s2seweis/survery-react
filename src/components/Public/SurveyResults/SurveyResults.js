/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import 'survey-react/survey.css';
import './SurveyResults.css';

const SurveyResults = () => {
  const {dataid} = useParams ();

  const surveyDataFromRedux = useSelector (state => state.data.surveyDataTaken);

  const [surveys, setSurveys] = useState ({});

  useEffect (
    () => {
      if (surveyDataFromRedux.length === 0) {
        console.log ('No surveys found!');
      } else {
        setSurveys (surveyDataFromRedux.find (o => o.id === dataid));
      }
    },
    [surveyDataFromRedux],
  );

  return (
    <div className="survey-content">

      <div style={{}} className="survey-form">
        {surveys &&
          <div className="survey-results">
            <h3>Title of the Survey: {` ${surveys.title}!`}</h3>
            <h3>Summary Answers:</h3>
            <pre style={{width: '90%', margin: 'auto'}}>
              {JSON.stringify (surveys, null, 2)}
            </pre>
          </div>}
      </div>
    </div>
  );
};

export default SurveyResults;
