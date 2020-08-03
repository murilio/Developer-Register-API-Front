import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStye from './globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStye />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
