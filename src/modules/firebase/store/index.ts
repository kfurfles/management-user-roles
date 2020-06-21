import firebaseConfig from './../config'
import { createStore, combineReducers, compose } from 'redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const rfConfig = {}; // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
firebase.firestore();

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
)(createStore);

// Add Firebase to reducers
const rootReducer = combineReducers({
  firestore: firestoreReducer,
});

// Create store with reducers and initial state
const initialState = {};
export const store = createStoreWithFirebase(rootReducer, initialState);
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore' 
// import {
//   firebaseReducer,
//   firestoreReducer
// } from 'react-redux-firebase'

// export const app = firebase.initializeApp(fbConfig)
// firebase.firestore(app) 

// export const firebaseRootReducer = {
//   firebase: firebaseReducer,
//   firestore: firestoreReducer // <- needed if using firestore
// }


// Create store with reducers and initial state
// const initialState = {}
// const store = createStore(rootReducer, initialState)

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance // <- needed if using firestore
// }