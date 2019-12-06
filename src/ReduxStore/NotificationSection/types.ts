export interface NotificationState {
    message : string;
    color : string;
    isVisible : boolean;
}

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export interface NSShowNotificationAction {
    type : typeof SHOW_NOTIFICATION,
    message : string,
    color : string
}

export interface NSHideNotificationAction {
    type : typeof HIDE_NOTIFICATION
}

export type NotificationSectionActionTypes = NSShowNotificationAction | NSHideNotificationAction;