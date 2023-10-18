// reducers/formReducer.js
const initialState = {
  questions: [
    { id: '1', text: 'Question 1' },
    { id: '2', text: 'Question 2' },
    // ...other initial questions
  ],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_ORDER':
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;