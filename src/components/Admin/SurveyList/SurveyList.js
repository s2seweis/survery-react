/* eslint-disable */
import React, {useEffect} from 'react';
import 'survey-react/survey.css';
import {useDispatch, useSelector} from 'react-redux';
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import {setSurveyData} from '../../../redux/actions/survey';
import {firestore} from '../../../services/firebase';
import './SurveyList.css';
import {Link} from 'react-router-dom';

const SurveyList = () => {
  const dispatch = useDispatch ();
  const surveyDataFromRedux = useSelector (state => state.data.surveyData);

  useEffect (
    () => {
      const fetchSurveyDataFromFirestore = async () => {
        try {
          const surveyCollectionRef = collection (firestore, 'adminSurvey');
          const surveySnapshot = await getDocs (surveyCollectionRef);

          const surveyDataAdmin = surveySnapshot.docs.map (doc => ({
            id: doc.id,
            ...doc.data (),
          }));

          dispatch (setSurveyData (surveyDataAdmin));
        } catch (error) {
          console.error ('Error fetching survey data:', error);
        }
      };

      fetchSurveyDataFromFirestore ();
    },
    [dispatch],
  );

  //   ###

  const handleDeleteSurvey = async surveyId => {
    try {
      // Delete survey data from Firestore
      await deleteDoc (doc (firestore, 'adminSurvey', surveyId));

      // Remove survey data from Redux store
      const updatedSurveyData = surveyDataFromRedux.filter (
        data => data.id !== surveyId,
      );
      dispatch (setSurveyData (updatedSurveyData));
    } catch (error) {
      console.error ('Error deleting survey:', error);
    }
  };

  //   ###

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
                    <Link to={`/admin/available-surveys/${data.id}`}>
                      Edit the Suvey
                    </Link>
                  </button>
                  <button
                    className="btn1"
                    onClick={() => handleDeleteSurvey (data.id)}
                  >
                    Delete Survey
                  </button>
                </div>
              ))}
            </div>
          </div>}
      </div>
    </div>
  );
};

export default SurveyList;
