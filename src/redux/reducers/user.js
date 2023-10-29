const initialState = {
  userData: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload
      };
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        userData: null
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
