// reducer.js
import { ADD_DATA } from '../actions/actions';

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
