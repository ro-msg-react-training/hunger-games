import * as LTypes from './types';

export const initialState: LTypes.LoginState = {
    userData:{
        username:"",
        password:""
    },
    isLoggedIn: false,
    isLoading: false,
    activateNavbar:false
};

export function loginReducer(state: LTypes.LoginState = initialState, action: LTypes.LoginActionTypes):  LTypes.LoginState {
    switch (action.type) {
        case LTypes.LOGIN_ACTION: {
            return {
                userData:action.userInfo,
                activateNavbar:true,
                isLoading:true,
                isLoggedIn:true
            }
        }

        case LTypes.LOGOUT_ACTION: {
            return {
                userData:{} as any,
                isLoggedIn:false,
                isLoading:false,
                activateNavbar:true

            };
        }

        case LTypes.LOAD_PAGE: {
            return {
                ...state,
                isLoading: true
            };
        }

        default:
            return state;
    }
}