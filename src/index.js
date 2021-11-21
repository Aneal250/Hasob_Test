import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Components/Store/store'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

