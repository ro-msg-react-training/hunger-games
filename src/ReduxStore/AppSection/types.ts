export interface AppState {
    isLoading : boolean;
}

export const TOGGLE_LOADING_ON = "TOGGLE_LOADING_ON";
export const TOGGLE_LOADING_OFF = "TOGGLE_LOADING_OFF";

export interface AToggleLoadingOnAction {
    type : typeof TOGGLE_LOADING_ON;
}

export interface AToggleLoadingOffAction {
    type : typeof TOGGLE_LOADING_OFF;
}

export type AppActionTypes = AToggleLoadingOnAction | AToggleLoadingOffAction;

