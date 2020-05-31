import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './scss/theme/index.scss'
import * as serviceWorker from './serviceWorker';
import { sentryInitialize } from './modules/sentry'
import Store from './containers/Store';

// firebaseApp().initialize()
sentryInitialize()

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
