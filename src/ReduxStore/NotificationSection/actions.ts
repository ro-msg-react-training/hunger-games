import * as NTypes from "./types";

export function showNotification(
  message: string,
  color: string
): NTypes.NotificationSectionActionTypes {
  return {
    type: NTypes.SHOW_NOTIFICATION,
    message: message,
    color: color
  };
}

export function hideNotification(): NTypes.NotificationSectionActionTypes {
  return {
    type: NTypes.HIDE_NOTIFICATION
  };
}
