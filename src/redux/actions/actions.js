import { firestore } from '../../../src/services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const ADD_DATA = 'ADD_DATA';
export const ADD_DATA_ADMIN = 'ADD_DATA_ADMIN';
export const UPDATE_OBJECT = 'UPDATE_OBJECT';
export const DELETE_OBJECT = 'DELETE_OBJECT';
export const SET_OBJECTS = 'SET_OBJECTS';
export const SET_DOCUMENT = 'SET_DOCUMENT';
export const SET_SURVEY_DATA = 'SET_SURVEY_DATA';
export const SET_SURVEY_DATA_ADMIN = 'SET_SURVEY_DATA_ADMIN';

export const addData = object => ({ type: ADD_DATA, payload: object });
export const addDataAdmin = object => ({ type: ADD_DATA_ADMIN, payload: object });
export const updateObject = object => ({ type: UPDATE_OBJECT, payload: object });
export const deleteObject = objectId => ({ type: DELETE_OBJECT, payload: objectId });
export const setObjects = objects => ({ type: SET_OBJECTS, payload: objects });
export const setDocument = documentData => ({ type: SET_DOCUMENT, payload: documentData });
export const setSurveyDataAdmin = dataWithIds => ({ type: SET_SURVEY_DATA, payload: dataWithIds });
export const setSurveyData = dataWithIds => ({ type: SET_SURVEY_DATA_ADMIN, payload: dataWithIds });

export const updateDataAdmin = (docId, updatedData) => {
  return async (dispatch) => {
    try {
      await updateDoc(doc(firestore, 'adminSurvey', docId), updatedData);
      dispatch({ type: 'DATA_UPDATED', payload: { docId, updatedData } });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
};
