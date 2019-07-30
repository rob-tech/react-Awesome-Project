import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ProjAwesome  from'./components/ProjAwesome';
import AwesomeNav from'./components/AwesomeNav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ProjAwesome />, document.getElementById('root'));
ReactDOM.render(<AwesomeNav />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
