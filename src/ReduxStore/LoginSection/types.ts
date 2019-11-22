import { IUser } from "../../model/entitys";

export interface LoginState {
  userData: IUser;
  isLoggedIn: boolean;
  isLoading: boolean;
  activateNavbar: boolean;
}

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";
export const ACTIVATE_NAVBAR = "ACTIVATE_NAVBAR";
export const LOAD_PAGE = "LOAD_PAGE";

export interface LLoginEvent {
  type: typeof LOGIN_ACTION;
  userInfo: IUser;
}

export interface LLogoutEvent {
  type: typeof LOGOUT_ACTION;
}

export interface LTriggerLoading {
  type: typeof LOAD_PAGE;
}

export type LoginActionTypes = LLoginEvent | LLogoutEvent | LTriggerLoading;
