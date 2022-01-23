import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
// import * as serviceWorker from './serviceWorker';
// import configureStore from './redux/configureStore';

// load data from localStorage
// const persistedState = loadState();

 // pass initial data if there is in localstorage
// const store = configureStore(persistedState);

// persist redux state to localStorage for initializing the state with previous value ( to handle)
// store.subscribe(() => saveState(store.getState()));
ReactDOM.render(
  // <ReduxProvider store={store}>
  <Router><App /></Router>
  ,
  // </ReduxProvider>,
  document.getElementById('root')
);
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
