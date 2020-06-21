import { combineReducers } from 'redux'

import { appReducer } from './app'
import { modalReducer } from './modal'
export type RootState = ReturnType<typeof rootReducer>

const state = {
  APP: appReducer,
  MODAL: modalReducer
}
export const rootReducer = combineReducers(state)