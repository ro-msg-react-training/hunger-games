import { IOrders } from "../../model/entites";

export interface PeacekeepersState {
    placedOrders : IOrders[];
}

export const ADD_ORDER = "ADD_ORDER";
export const CLOSE_ORDER = "CLOSE_ORDER";

export interface PKAddOrderAction {
    type : typeof ADD_ORDER,
    newOrder : IOrders
}

export interface PKCloseOrderAction {
    type : typeof CLOSE_ORDER,
    orderClosing : IOrders
}

export type PeacekeepersActionTypes = PKAddOrderAction | PKCloseOrderAction;