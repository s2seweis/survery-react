import { SET_SURVEY_DATA_TAKEN } from '../actions/survey';
import { SET_SURVEY_DATA_ADMIN } from '../actions/survey';

const initialState = {
  surveyData: [],
  surveyDataTaken: [],
  surveyLoading: true,
  surveyError: null,
};

const rootReducer2 = (state = initialState, action) => {
  switch (action.type) {
  case SET_SURVEY_DATA_TAKEN:
    return {
      ...state,
      surveyDataTaken: action.payload,
      surveyLoading: false,
      surveyError: null,
    };
  case SET_SURVEY_DATA_ADMIN:
    return {
      ...state,
      surveyData: action.payload,
      surveyLoading: false,
      surveyError: null,
    };
  default:
    return state;
  }
};

export default rootReducer2;
