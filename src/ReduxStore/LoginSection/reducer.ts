import * as LTypes from "./types";

export const initialState: LTypes.LoginState = {
  userData: {
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
        userData: {} as any,
        isLoggedIn: false,
        activateNavbar: false
      };
    }

    default:
      return state;
  }
}
