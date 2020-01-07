import * as PKDTypes from "./types";
import { IOrders } from "../../model/entites";

export const initialState: PKDTypes.PeacekeepersDetailedState = {
    currentOrder : {} as IOrders,
    hasUserPlacedTheOrder : false,
    haveAllChangesBeenAcquitted : false
};

export function peacekeepersDetailedReducer(state: PKDTypes.PeacekeepersDetailedState = initialState, action: PKDTypes.PeacekeepersDetailedActionTypes): PKDTypes.PeacekeepersDetailedState {
    switch (action.type) {
        case PKDTypes.CHANGE_PAYED_AMOUNT: {

            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
}