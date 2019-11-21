import * as LTypes from './types';
import { IUser } from '../../model/entitys';

export function loginEventHandler(userData:IUser) : LTypes.LLoginEvent {
    return {
        type : LTypes.LOGIN_ACTION,
        userInfo:userData,
    };
}

export function logoutEventHandler() : LTypes.LLogoutEvent {
    return {
        type : LTypes.LOGOUT_ACTION
    };
}

export function loadingActiveEventHandler() : LTypes.LTriggerLoading {
    return {
        type : LTypes.LOAD_PAGE
    };
}