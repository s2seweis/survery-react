// rootReducer.js
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import surveyReducer from './surveyReducer';

import rootReducer1 from './reducer1';
import rootReducer2 from './reducer2';
// import surveyReducer from './survey';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  survey: rootReducer1,
  data: rootReducer2,
  // survey: surveyReducer,
  auth: authReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root', // key is required
  storage, // storage is required
  // other config options if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
