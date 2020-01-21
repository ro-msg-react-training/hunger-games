import { IUser } from "../../model/entites";

export interface LoginState {
  userData: IUser;
  isLoggedIn: boolean;
  activateNavbar: boolean;
}

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";
// export const LOGIN_INFO = "LOGIN_INFO";
export const ACTIVATE_NAVBAR = "ACTIVATE_NAVBAR";
export const LOAD_PAGE = "LOAD_PAGE";
export const LOGIN_UPDATE_TEMPORARY_USER = "LOGIN_UPDATE_TEMPORARY_USER";

export interface LLoginEvent {
  type: typeof LOGIN_ACTION;
  userInfo: IUser;
}
// export interface LLoginInfo {
//   type: typeof LOGIN_INFO;
//   userInfo: IUser;
// }

export interface LLogoutEvent {
  type: typeof LOGOUT_ACTION;
}

export interface LUpdateTemporaryUser {
  type: typeof LOGIN_UPDATE_TEMPORARY_USER;
  newUserValues : IUser;
}

export type LoginActionTypes = LLoginEvent | LLogoutEvent | LUpdateTemporaryUser;
