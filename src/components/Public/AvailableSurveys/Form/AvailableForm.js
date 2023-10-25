import React, {useState} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import {useDispatch, useSelector} from 'react-redux';

import {addData} from '../../../../redux/actions/actions';
import {firestore} from '../../../../services/firebase';

import {collection, addDoc} from 'firebase/firestore';
import survey1 from '../../../../assets/data/survey1';
import './AvailableForm.css';

const AvailableForm = () => {


  const surveyDataFromRedux = useSelector (state => state.data.surveyData);
  console.log("line:100", surveyDataFromRedux);


  const goBack = () => {
    window.history.back (); // Go back to the previous page using window.history
  };

  console.log("line:101", survey1.title);

  const [surveyResult, setSurveyResult] = useState (null);
  console.log ('line:1', surveyResult);

  const dispatch = useDispatch ();

  const onCompleteSurvey = async survey => {

    const surveyData = {
      ...survey.data,
      title: survey1.title};

    console.log ('line:2', surveyData);
    setSurveyResult (surveyData);
    // window.location.href = '/form/success';

    const dataToAdd = {
      // Your data fields here
      field1: 'value1',
      field2: 'value2',
      // ...
    };

    try {
      // Add data to Firestore
      const docRef = await addDoc (
        collection (firestore, 'takenSurvey'),
        surveyData
      );

      // Dispatch the action to add data to Redux store
      dispatch (addData ({id: docRef.id, ...surveyData}));
      // dispatch(addData({ id: docRef.id, ...dataToAdd }));

      console.log ('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error ('Error adding document: ', error);
    }
  };

  return (
    <div className="survey-content">
       
        <button className='go-back' onClick={goBack}>
          Go Back
        </button>

      <div className="survey-form">
        {/* <Survey.Survey json={surveyJSON} onComplete={onCompleteSurvey} /> */}
        <Survey.Survey json={survey1} onComplete={onCompleteSurvey} />
        {surveyResult &&
          <div className="survey-results">
            <h3>Summay of your Survey:</h3>
            <pre>{JSON.stringify (surveyResult, null, 2)}</pre>
          </div>}


      </div>
    </div>
  );
};

export default AvailableForm;
