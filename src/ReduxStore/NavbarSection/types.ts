export interface NavbarState {
  activeTab: string;
}

export const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";

export interface NavChangeActiveTabAction {
  type: typeof CHANGE_ACTIVE_TAB;
  newActiveTab: string;
}

export type NavbarActionTypes = NavChangeActiveTabAction;
