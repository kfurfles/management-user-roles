import { IAction } from "./../typings/IAction";
import { modalActions } from '../constants/store'

const INITIAL_STATE = {
  showModal: false
}

type State = typeof INITIAL_STATE
export const modalReducer = (state = INITIAL_STATE, action: IAction<any>): State => {
  const {
    payload,
    type
  } = action

  switch (type) {
    case modalActions.SET_MODAL_STATE:
      return {
        ...state,
        showModal: !!payload as boolean
      } 
  
    default:
      return state;
  }

};


export {}