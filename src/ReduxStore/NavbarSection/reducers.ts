import * as NavTypes from './types';

const initialState : NavTypes.NavbarState = {
    activeTab : "districts"
}

export function navbarReducer(state : NavTypes.NavbarState = initialState, action : NavTypes.NavbarActionTypes) : NavTypes.NavbarState {
    switch(action.type) {
        case NavTypes.CHANGE_ACTIVE_TAB: {
            return {
                activeTab : action.newActiveTab
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}