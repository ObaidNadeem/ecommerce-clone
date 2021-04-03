import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter } from 'react-router-dom';
import store from './Store/index.js';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
