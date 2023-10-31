import {
  ADD_DATA,
  ADD_DATA_ADMIN,
  UPDATE_OBJECT,
  DELETE_OBJECT,
  SET_OBJECTS,
  SET_DOCUMENT,
} from '../actions/survey';

const initialState = {
  objects: [],
};

const rootReducer1 = (state = initialState, action) => {
  switch (action.type) {
  case ADD_DATA:
    return {
      ...state,
      objects: [...state.objects, action.payload],
    };

  case ADD_DATA_ADMIN:
    return {
      ...state,
      objects: [...state.objects, action.payload],
    };

  case UPDATE_OBJECT:
    return {
      ...state,
      objects: state.objects.map (
        obj => (obj.id === action.payload.id ? action.payload : obj),
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

  case 'DATA_UPDATED':
    const { docId, updatedData } = action.payload;
    // Update the specific document in the state with the updated data
    return {
      ...state,
      [docId]: {
        ...state[docId],
        ...updatedData,
      },
    };
    // ###

  default:
    return state;
  }
};

export default rootReducer1;
