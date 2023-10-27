import React, {useEffect} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import {useDispatch, useSelector} from 'react-redux';
import {collection, getDocs} from 'firebase/firestore';
import {setSurveyData} from '../../../redux/actions/actions';
import {firestore} from '../../../services/firebase';
import survey1 from '../../../assets/data/survey1';
import './TakenSurvey.css';
import {Link} from 'react-router-dom';

const TakenSuvey = () => {
  const dispatch = useDispatch ();
  const surveyDataFromRedux = useSelector (state => state.data.surveyData);
  console.log ('line:100', surveyDataFromRedux);

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

          dispatch (setSurveyData (surveyData));
        } catch (error) {
          console.error ('Error fetching survey data:', error);
        }
      };

      fetchSurveyDataFromFirestore ();
    },
    [dispatch]
  );

  const onCompleteSurvey = async survey => {
    // Handle survey completion logic if needed
  };

  return (
    <div className="survey-content">

      <div className="survey-form">
        {surveyDataFromRedux &&
          <div className="survey-results">
            {/* <h3>Survey Data from Redux Store:</h3> */}
            <h3>All Suveys from all users:</h3>
            <div className="takenSurvey-main">
              {surveyDataFromRedux.map ((data, index) => (
                <div className="takenSurvey-container" key={index}>
                  <div>{data.name}</div>
                  <div>{data.id}</div>
                  <div>{data.title}</div>
                  <button className="btn1 mr-2">
                    {/* <Link to={`/home`}>Take the Survey</Link> */}
                    <Link to={`/taken-surveys/${data.id}`}>
                      See the results
                    </Link>
                  </button>
                  {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                </div>
              ))}
            </div>
          </div>}
      </div>
    </div>
  );
};

export default TakenSuvey;
