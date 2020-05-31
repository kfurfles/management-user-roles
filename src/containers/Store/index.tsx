import React from 'react';
import { Provider } from 'react-redux'
import { store } from './../../store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { rrfConfig } from '../../modules/firebase/config/reduxFirebase';
import firebase from 'firebase/app'


const Store: React.FC = ({
  children
}) => {
  return <Provider store={store}>
    {/* <ReactReduxFirebaseProvider 
      config={rrfConfig}
      firebase={firebase} 
      dispatch={store.dispatch}> */}
      {children}
    {/* </ReactReduxFirebaseProvider> */}
  </Provider>
}

export default Store;