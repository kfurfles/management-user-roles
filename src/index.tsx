import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './scss/theme/index.scss'
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://a77d0e69b1704b19a9b235b047f3805a@o369764.ingest.sentry.io/5253172"});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
