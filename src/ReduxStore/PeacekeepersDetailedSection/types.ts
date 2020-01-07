import { IOrders } from "../../model/entites";

export interface PeacekeepersDetailedState {
    currentOrder : IOrders;
    hasUserPlacedTheOrder : boolean;
    haveAllChangesBeenAcquitted : boolean;
}

export const LOAD_USER_ORDERS = "LOAD_USER_ORDERS";
export const CHANGE_PAYED_AMOUNT = "CHANGE_PAYED_AMOUNT";

export interface PKDLoadUserOrdersAction {
    type : typeof LOAD_USER_ORDERS
}

export interface PKDChangePayedAmountAction {
    type : typeof CHANGE_PAYED_AMOUNT,
    user_order_id : number,
    payed : number
}

export type PeacekeepersDetailedActionTypes = PKDLoadUserOrdersAction | PKDChangePayedAmountAction;