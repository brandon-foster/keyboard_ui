import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

console.info(`This app is being run in [${process.env.NODE_ENV}] mode.`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {process.env.NODE_ENV === 'development' ?
    <App />
    :
    <React.StrictMode>
      <App />
    </React.StrictMode>
  }
  </>
);
