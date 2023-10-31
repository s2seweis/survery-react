import React, {useState, useEffect} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../../../redux/actions/survey';
import {firestore} from '../../../../services/firebase';
import {collection, addDoc} from 'firebase/firestore';
import {useParams, useNavigate} from 'react-router-dom';
import './AvailableForm.css';

const AvailableForm = () => {
  const {dataid} = useParams ();

  const surveyDataFromRedux = useSelector (state => state.data.surveyData);

  const [surveys, setSurveys] = useState ({});

  useEffect (
    () => {
      if (surveyDataFromRedux.length === 0) {
        // dispatch (getAllCars ());
        console.log ('No surveys found!');
      } else {
        setSurveys (surveyDataFromRedux.find (o => o.id === dataid));
      }
    },
    [surveyDataFromRedux],
  );

  const [surveyResult, setSurveyResult] = useState (null);

  const dispatch = useDispatch ();

  const navigate = useNavigate ();

  const onCompleteSurvey = async survey => {
    const surveyData = {
      ...survey.data,
      title: surveys.title,
    };

    setSurveyResult (surveyData);

    try {
      // Add data to Firestore
      const docRef = await addDoc (
        collection (firestore, 'takenSurvey'),
        surveyData,
      );

      // Dispatch the action to add data to Redux store
      dispatch (addData ({id: docRef.id, ...surveyData}));

      console.log ('Document written with ID: ', docRef.id);
      navigate ('/');
    } catch (error) {
      console.error ('Error adding document: ', error);
    }
  };

  return (
    <div className="survey-content">

      <div className="survey-form">
        <Survey.Survey json={surveys} onComplete={onCompleteSurvey} />
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
