import * as LTypes from "./types";
import { IUser } from "../../model/entites";

export function loginEventHandler(userData: IUser): LTypes.LLoginEvent {
  return {
    type: LTypes.LOGIN_ACTION,
    userInfo: userData
  };
}

export function logoutEventHandler(): LTypes.LLogoutEvent {
  return {
    type: LTypes.LOGOUT_ACTION
  };
}

export function updateLoginUserValues(newUserValues : IUser) : LTypes.LoginActionTypes {
  return {
    type: LTypes.LOGIN_UPDATE_TEMPORARY_USER,
    newUserValues: newUserValues
  };
}

// export function loginInfoProvider(): LTypes.LLoginInfo {
//   return {
//     type: LTypes.LOGIN_INFO,
//     userInfo: userData
//   };
// }