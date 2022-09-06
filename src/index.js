

// eslint-disable-next-line import/first
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { initialState } from './Context/initialState';
import { reducer } from './Context/reducer';

ReactDOM.render(

  <Router>
    <stateProvider initialState={initialState} reducer={reducer} >
      <App />
    </stateProvider>
  </Router>,
  document.getElementById('root')
);
