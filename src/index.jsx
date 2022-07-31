/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import api from 'api';
import { Provider } from 'react-redux';
import store from 'redux/store';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

api.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
