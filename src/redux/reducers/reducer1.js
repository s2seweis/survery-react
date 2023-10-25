// reducer.js
import {
  ADD_DATA,
  ADD_DATA_ADMIN,
  UPDATE_OBJECT,
  DELETE_OBJECT,
  SET_OBJECTS,
  SET_DOCUMENT
} from '../actions/actions';

const initialState = {
  objects: [],
};

const rootReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        // data: [...state.data, action.payload],
        objects: [...state.objects, action.payload],
      };

    case ADD_DATA_ADMIN:
      return {
        ...state,
        // data: [...state.data, action.payload],
        objects: [...state.objects, action.payload],
      };

    case UPDATE_OBJECT:
      return {
        ...state,
        objects: state.objects.map (
          obj => (obj.id === action.payload.id ? action.payload : obj)
        ),
      };
    case DELETE_OBJECT:
      return {
        ...state,
        objects: state.objects.filter (obj => obj.id !== action.payload),
      };
    case SET_OBJECTS:
      return {
        ...state,
        objects: action.payload,
      };
    // ###


    case SET_DOCUMENT:
      return {
        ...state,
        document: action.payload,
      };
    // ###


    default:
      return state;
  }
};

export default rootReducer1;
