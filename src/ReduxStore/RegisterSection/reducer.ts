import * as RTypes from "./types";
import { IUser } from "../../model/entites";

export const initialState: RTypes.RegisterState = {
  userData: {
    id : 0,
    email : "",
    username: "",
    password: ""
  },
  activateNavbar: false
};

export function registerReducer(state: RTypes.RegisterState = initialState, action: RTypes.LoginActionTypes): RTypes.RegisterState {
  switch (action.type) {
    case RTypes.SAVE_NEW_USER: {
      return {
        userData: action.userInfo,
        activateNavbar: false
      };
    }

    case RTypes.LOG_NEW_USER_IN_ACTION: {
      return {
        userData: action.userInfo,
        activateNavbar: true
      };
    }

    case RTypes.UPDATE_TEMPORARY_USER: {
      let newValues : IUser = action ? action.newUserValues : state.userData;

      return {
        ...state,
        userData : newValues
      };
    }

    default:
      return state;
  }
}
