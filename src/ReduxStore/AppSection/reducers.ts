import * as ATypes from "./types";

const initialState: ATypes.AppState = {
  isLoading: false
};

export function appComponentReducer(
  state: ATypes.AppState = initialState,
  action: ATypes.AppActionTypes
): ATypes.AppState {
  switch (action.type) {
    case ATypes.TOGGLE_LOADING_ON: {
      return {
        isLoading: true
      };
    }

    case ATypes.TOGGLE_LOADING_OFF: {
      return {
        isLoading: false
      };
    }

    default:
      return state;
  }
}
