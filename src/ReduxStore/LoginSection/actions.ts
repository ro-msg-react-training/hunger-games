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
