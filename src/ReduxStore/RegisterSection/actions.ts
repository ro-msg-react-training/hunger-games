import * as RTypes from "./types";
import { IUser } from "../../model/entitys";

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
