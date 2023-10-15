import React, { useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

const SurveyForm = () => {
  const [surveyResult, setSurveyResult] = useState(null);
  console.log("line:1", surveyResult);

  const surveyJSON = {
    title: 'Sample Survey',
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'text',
            name: 'name',
            title: 'What is your name?',
            isRequired: true,
          },
          {
            type: 'radiogroup',
            name: 'age',
            title: 'What is your age group?',
            isRequired: true,
            choices: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65 or Above'],
          },
          {
            type: 'checkbox',
            name: 'activities',
            title: 'Which of the following activities do you enjoy?',
            isRequired: true,
            choices: ['Reading', 'Traveling', 'Sports', 'Movies', 'Cooking', 'Gaming', 'Outdoor Activities'],
          },
          {
            type: 'rating',
            name: 'satisfaction',
            title: 'On a scale of 1 to 5, how satisfied are you with your life?',
            isRequired: true,
            rateMin: 1,
            rateMax: 5,
          },
          {
            type: 'comment',
            name: 'feedback',
            title: 'Any additional comments or feedback?',
          },
        ],
      },
    ],
  };

  const onCompleteSurvey = (survey) => {
    setSurveyResult(survey.data);
  };

  return (
    <div className="survey-form">
      <h2>Take Our Survey</h2>
      <Survey.Survey json={surveyJSON} onComplete={onCompleteSurvey} />
      {surveyResult && (
        <div className="survey-results">
          <h3>Survey Results:</h3>
          <pre>{JSON.stringify(surveyResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
