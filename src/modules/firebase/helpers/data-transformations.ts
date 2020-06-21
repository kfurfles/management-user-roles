import { IUser } from "../typings/IUser";

export const firebaseListToArray = (list: any) => {
  return Object.keys(list).map(key => {
    return {
      id: key,
      ...list[key] as IUser
    }
  })
}

export const getFirebaseDBValue = 
  (database: any,event: any) => 
  (value: any) => {
  return database().ref('/users').on(event, (snapshot: any) => {
    value(snapshot.val())
  });
}