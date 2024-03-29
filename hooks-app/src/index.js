import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicForm from './components/forms/BasicForm';
import Useeffect from './components/forms/Useeffect';
import UnControl from './components/forms/UnControl';


ReactDOM.render(
  <React.StrictMode>
    <UnControl/>
    {/* <Useeffect/> */}
    {/* <BasicForm/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
