// import {
//     ADD_DATA,
//     ADD_DATA_ADMIN,
//     UPDATE_OBJECT,
//     DELETE_OBJECT,
//     SET_OBJECTS,
//     SET_DOCUMENT,
//     DATA_UPDATED,
//     SET_SURVEY_DATA,
//     SET_SURVEY_DATA_ADMIN
//   } from '../actions/actions';
  
//   const initialState = {
//     objects: [],
//     surveyData: [],
//     surveyLoading: true,
//     surveyError: null,
//   };
  
//   const surveyReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_DATA:
//       case ADD_DATA_ADMIN:
//         return {
//           ...state,
//           objects: [...state.objects, action.payload],
//         };
  
//       case UPDATE_OBJECT:
//         return {
//           ...state,
//           objects: state.objects.map(obj => (obj.id === action.payload.id ? action.payload : obj)),
//         };
  
//       case DELETE_OBJECT:
//         return {
//           ...state,
//           objects: state.objects.filter(obj => obj.id !== action.payload),
//         };
  
//       case SET_OBJECTS:
//         return {
//           ...state,
//           objects: action.payload,
//         };
  
//       case SET_DOCUMENT:
//         return {
//           ...state,
//           document: action.payload,
//         };
  
//       case DATA_UPDATED:
//         const { docId, updatedData } = action.payload;
//         return {
//           ...state,
//           [docId]: {
//             ...state[docId],
//             ...updatedData,
//           },
//         };
  
//       case SET_SURVEY_DATA:
//       case SET_SURVEY_DATA_ADMIN:
//         return {
//           ...state,
//           surveyData: action.payload,
//           surveyLoading: false,
//           surveyError: null,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default surveyReducer;
  