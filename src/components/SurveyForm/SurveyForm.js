import React, { useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import { useDispatch } from "react-redux";
import { addData } from '../../redux/actions/actions';
import { firestore } from '../../services/firebase';

import { collection, addDoc } from 'firebase/firestore';
import survey1 from '../../assets/data/survey1';

const SurveyForm = () => {

  const goBack = () => {
    window.history.back(); // Go back to the previous page using window.history
  };

  const [surveyResult, setSurveyResult] = useState(null);
  console.log("line:1", surveyResult);

  const dispatch = useDispatch();

  // const surveyJSON = {
  //   title: 'Sample Survey',
  //   pages: [
  //     {
  //       name: 'page1',
  //       elements: [
  //         {
  //           type: 'text',
  //           name: 'name',
  //           title: 'What is your name?',
  //           isRequired: true,
  //         },
  //         {
  //           type: 'radiogroup',
  //           name: 'age',
  //           title: 'What is your age group?',
  //           isRequired: true,
  //           choices: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65 or Above'],
  //         },
  //         {
  //           type: 'checkbox',
  //           name: 'activities',
  //           title: 'Which of the following activities do you enjoy?',
  //           isRequired: true,
  //           choices: ['Reading', 'Traveling', 'Sports', 'Movies', 'Cooking', 'Gaming', 'Outdoor Activities'],
  //         },
  //         {
  //           type: 'rating',
  //           name: 'satisfaction',
  //           title: 'On a scale of 1 to 5, how satisfied are you with your life?',
  //           isRequired: true,
  //           rateMin: 1,
  //           rateMax: 5,
  //         },
  //         {
  //           type: 'comment',
  //           name: 'feedback',
  //           title: 'Any additional comments or feedback?',
  //         },
  //       ],
  //     },


  //   ],
  // };

  const onCompleteSurvey = async (survey) => {
    const surveyData = survey.data;
    console.log("line:3", surveyData);
    setSurveyResult(surveyData);
    // window.location.href = '/form/success';



    const dataToAdd = {
      // Your data fields here
      field1: 'value1',
      field2: 'value2',
      // ...
    };

    try {
      // Add data to Firestore
      const docRef = await addDoc(collection(firestore, 'survey'), surveyData);

      // Dispatch the action to add data to Redux store
      dispatch(addData({ id: docRef.id, ...surveyData }));
      // dispatch(addData({ id: docRef.id, ...dataToAdd }));

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }




  };

  return (
    <div className="survey-form">
      {/* <h2>Take Our Survey</h2> */}
      {/* <Survey.Survey json={surveyJSON} onComplete={onCompleteSurvey} /> */}
      <Survey.Survey json={survey1} onComplete={onCompleteSurvey} />
      {surveyResult && (
        <div className="survey-results">
          <h3>Summay of your Survey:</h3>
          <pre>{JSON.stringify(surveyResult, null, 2)}</pre>
        </div>
      )}

      <button onClick={goBack}>
        Go Back
      </button>

    </div>
  );
};

export default SurveyForm;
