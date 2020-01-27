import * as ATypes from "./types";

export function toggleLoadingOn(): ATypes.AppActionTypes {
  return {
    type: ATypes.TOGGLE_LOADING_ON
  };
}

export function toggleLoadingOff(): ATypes.AppActionTypes {
  return {
    type: ATypes.TOGGLE_LOADING_OFF
  };
}
