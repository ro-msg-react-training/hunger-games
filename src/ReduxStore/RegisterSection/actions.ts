import * as RTypes from "./types";
import { IUser } from "../../model/entites";

export function registerEventHandler(
  userData: IUser
): RTypes.RSaveUserDateEvent {
  return {
    type: RTypes.SAVE_NEW_USER,
    userInfo: userData
  };
}

export function loginFromRegiterEventHandler(
  userData: IUser
): RTypes.RUserInputEvent {
  return {
    type: RTypes.LOG_NEW_USER_IN_ACTION,
    userInfo: userData
  };
}

export function updateUserValues(
  newUserValues: IUser
): RTypes.LoginActionTypes {
  return {
    type: RTypes.UPDATE_TEMPORARY_USER,
    newUserValues: newUserValues
  };
}
