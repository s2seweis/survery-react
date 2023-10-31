const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_USER_DATA':
    return {
      ...state,
      userData: action.payload,
    };
  case 'CLEAR_USER_DATA':
    return {
      ...state,
      userData: null,
    };
    // case 'UPDATE_USER_DATA':
    //   return {
    //     ...state,
    //     userData: action.payload,
    //   };
  case 'DATA_UPDATED':
    const {docId, updatedData} = action.payload;
    // Check if the updated data corresponds to the current user being edited
    if (state.userData && state.userData.userId === docId) {
      return {
        ...state,
        userData: {
          ...state.userData,
          ...updatedData,
        },
      };
    }
  default:
    return state;
  }
};

export default userReducer;
