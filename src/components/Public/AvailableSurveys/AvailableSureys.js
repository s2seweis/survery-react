import React, {useEffect} from 'react';
import 'survey-react/survey.css';
import {useDispatch, useSelector} from 'react-redux';
import {collection, getDocs} from 'firebase/firestore';
import {setSurveyData} from '../../../redux/actions/survey';
import {firestore} from '../../../services/firebase';
import './AvailableSurveys.css';
import {Link} from 'react-router-dom';

const AvailableSurveys = () => {
  const dispatch = useDispatch ();
  const surveyDataFromRedux = useSelector (state => state.data.surveyData);
  console.log ('line:100', surveyDataFromRedux);

  useEffect (
    () => {
      const fetchSurveyDataFromFirestore = async () => {
        try {
          const surveyCollectionRef = collection (firestore, 'adminSurvey');
          const surveySnapshot = await getDocs (surveyCollectionRef);

          const surveyData = surveySnapshot.docs.map (doc => ({
            id: doc.id,
            ...doc.data (),
          }));

          dispatch (setSurveyData (surveyData));
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
            <h3>Available Surveys:</h3>
            <div className="takenSurvey-main">
              {surveyDataFromRedux.map ((data, index) => (
                <div className="takenSurvey-container" key={index}>
                  <div>{data.name}</div>
                  <div>{data.title}</div>
                  <button className="btn1 mr-2">
                    <Link to={`/available-surveys/${data.id}`}>
                      Take the Suvey
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

export default AvailableSurveys;
