import { IUser } from "../../model/entitys";

export interface RegisterState {
  userData: IUser;
  isLoading: boolean;
  activateNavbar: boolean;
}

export const LOG_NEW_USER_IN_ACTION = "REGISTER_AND_LOGIN_ACTION";
export const SAVE_NEW_USER = "SAVE_NEW_USER";
export const ACTIVATE_NAVBAR = "ACTIVATE_NAVBAR";
export const LOAD_PAGE = "LOAD_PAGE";

export interface RUserInputEvent {
  type: typeof LOG_NEW_USER_IN_ACTION;
  userInfo: IUser;
}

export interface RSaveUserDateEvent {
  type: typeof SAVE_NEW_USER;
  userInfo: IUser;
}

export interface RTriggerLoading {
  type: typeof LOAD_PAGE;
}

export type LoginActionTypes = RUserInputEvent | RSaveUserDateEvent | RTriggerLoading;
