import * as LTypes from "./types";
import { IUser } from "../../model/entites";

export const initialState: LTypes.LoginState = {
  userData: {
    id: 0,
    email: "",
    username: "",
    password: ""
  },
  isLoggedIn: false,
  activateNavbar: false
};

export function loginReducer(
  state: LTypes.LoginState = initialState,
  action: LTypes.LoginActionTypes
): LTypes.LoginState {
  switch (action.type) {
    case LTypes.LOGIN_ACTION: {
      return {
        userData: action.userInfo,
        activateNavbar: true,
        isLoggedIn: true
      };
    }

    case LTypes.LOGOUT_ACTION: {
      return {
        userData: {
          id: 0,
          email: "",
          username: "",
          password: ""
        },
        isLoggedIn: false,
        activateNavbar: false
      };
    }

    case LTypes.LOGIN_UPDATE_TEMPORARY_USER: {
      let newValues: IUser = action ? action.newUserValues : state.userData;

      return {
        ...state,
        userData: newValues
      };
    }

    default:
      return state;
  }
}
