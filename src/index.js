// import React from 'react';
// import ReactDOM from "react-dom";
// import './assets/Theme/index.css';
// import App from './App';
// import store from './redux/store';
// import { Provider } from "react-redux";



// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from './redux/store';
import './assets/theme/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);