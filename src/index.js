import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import MainPage from './components/mainPage/mainPage';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
