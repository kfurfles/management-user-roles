import * as firebase from "firebase/app";
import firebaseConfig from './../config'
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import { Observable, from } from 'rxjs'
import { map } from 'rxjs/operators'
import { firebaseListToArray } from './../helpers/data-transformations'
import { IUser } from "../typings/IUser";

firebase.initializeApp(firebaseConfig);

export const getUserList = () => {
  return new Observable(subscribe => {
    firebase.database().ref('/users').on('value', snapshot => {
      subscribe.next(snapshot.val())
    });
  }).pipe(
    map(users => firebaseListToArray(users))
  )
}

export const addUser = (user: IUser) => {
  return from(firebase.database()
    .ref('/users')
    .push({})
    .set(user))
}
