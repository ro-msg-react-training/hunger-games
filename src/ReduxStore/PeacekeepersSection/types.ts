import { IOrders } from "../../model/entites";

export interface PeacekeepersState {
  placedOrders: IOrders[];
}

export const ADD_ORDER = "ADD_ORDER";
export const CLOSE_ORDER = "CLOSE_ORDER";
export const LOAD_MAIN_ORDER_LIST = "LOAD_MAIN_ORDER_LIST";

export interface PKAddOrderAction {
  type: typeof ADD_ORDER;
  newOrder: IOrders;
}

export interface PKCloseOrderAction {
  type: typeof CLOSE_ORDER;
  orderId: number;
}

export interface PKLoadMainOrderListAction {
  type: typeof LOAD_MAIN_ORDER_LIST;
}

export type PeacekeepersActionTypes =
  | PKAddOrderAction
  | PKCloseOrderAction
  | PKLoadMainOrderListAction;
