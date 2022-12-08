import React from 'react';
// ReactDom library from react 17 
import ReactDOM from 'react-dom';
import App from './App';

// Here we import bootstrap for access to some additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

// when we mount App to root gets mounted to the page 
ReactDOM.render(<App />, document.getElementById('root'));
