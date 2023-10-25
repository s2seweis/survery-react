// reducer.js
import { SET_SURVEY_DATA } from '../actions/actions';
import { SET_SURVEY_DATA_ADMIN } from '../actions/actions';

const initialState = {
  surveyData: [],
  surveyLoading: true,
  surveyError: null
};

const rootReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case SET_SURVEY_DATA:
      return {
        ...state,
        surveyData: action.payload,
        surveyLoading: false,
        surveyError: null
      };
    case SET_SURVEY_DATA_ADMIN:
      return {
        ...state,
        surveyData: action.payload,
        surveyLoading: false,
        surveyError: null
      };
    default:
      return state;
  }
};

export default rootReducer2;
