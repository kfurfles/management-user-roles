import { userActions } from './../../constants/store'

export const setUserList = (userList: any[]) => ({
  type: userActions.SET_USER_LIST,
  payload: userList
})