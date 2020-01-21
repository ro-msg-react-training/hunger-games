import * as NavTypes from './types';

export function changeActiveTab(newActiveTab : string) : NavTypes.NavbarActionTypes {
    return {
        type : NavTypes.CHANGE_ACTIVE_TAB,
        newActiveTab : newActiveTab
    };
}