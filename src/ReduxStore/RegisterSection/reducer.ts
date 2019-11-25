import * as RTypes from "./types";

export const initialState: RTypes.RegisterState = {
  userData: {
    username: "",
    password: ""
  },
  activateNavbar: false
};

export function registerReducer(
  state: RTypes.RegisterState = initialState,
  action: RTypes.LoginActionTypes
): RTypes.RegisterState {
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
        activateNavbar: false
      };
    }

    default:
      return state;
  }
}
