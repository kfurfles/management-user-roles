import { IAction } from "../../typings/IAction";
import { modalActions } from "../../constants/store"

export const SetModalState = (state: 'active'| 'deactive'): IAction<boolean> => ({
  payload: state === 'active' ? true: false,
  type: modalActions.SET_MODAL_STATE
})