import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/styles.css';
import  {render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
