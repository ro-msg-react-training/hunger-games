import * as NTypes from "./types";

export const InitialState: NTypes.NotificationState = {
  message: "Blank message dialog",
  color: "light",
  isVisible: false
};

export function notificationReducer(
  state: NTypes.NotificationState = InitialState,
  action: NTypes.NotificationSectionActionTypes
): NTypes.NotificationState {
  switch (action.type) {
    case NTypes.SHOW_NOTIFICATION: {
      return {
        message: action.message,
        color: action.color,
        isVisible: true
      };
    }

    case NTypes.HIDE_NOTIFICATION: {
      return {
        ...state,
        isVisible: false
      };
    }

    default: {
      return state;
    }
  }
}
