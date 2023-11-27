/* eslint-disable */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {collection, getDocs} from 'firebase/firestore';
import {setSurveyDataTaken} from '../../../redux/actions/survey';
import {firestore} from '../../../services/firebase';
import {Link} from 'react-router-dom';
import 'survey-react/survey.css';
import './TakenSurvey.css';

const TakenSuvey = () => {
  const dispatch = useDispatch ();
  const surveyDataFromRedux = useSelector (state => state.data.surveyDataTaken);

  useEffect (
    () => {
      const fetchSurveyDataFromFirestore = async () => {
        try {
          const surveyCollectionRef = collection (firestore, 'takenSurvey');
          const surveySnapshot = await getDocs (surveyCollectionRef);

          const surveyData = surveySnapshot.docs.map (doc => ({
            id: doc.id,
            ...doc.data (),
          }));

          dispatch (setSurveyDataTaken (surveyData));
        } catch (error) {
          console.error ('Error fetching survey data:', error);
        }
      };

      fetchSurveyDataFromFirestore ();
    },
    [dispatch],
  );

  return (
    <div className="survey-content">

      <div className="survey-form">
        {surveyDataFromRedux &&
          <div className="survey-results">
            <h3>All Surveys from all users:</h3>
            <div className="takenSurvey-main">
              {surveyDataFromRedux.map ((data, index) => (
                <div className="takenSurvey-container" key={index}>
                  <div>{data.name}</div>
                  <div>{data.title}</div>
                  <button className="btn1 mr-2">
                    <Link to={`/taken-surveys/${data.id}`}>
                      See the results
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>}
      </div>
    </div>
  );
};

export default TakenSuvey;
