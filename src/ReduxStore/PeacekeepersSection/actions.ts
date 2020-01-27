import * as PKTypes from "./types";
import { IOrders } from "../../model/entites";

export function addOrderToList(
  placedOrder: IOrders
): PKTypes.PeacekeepersActionTypes {
  return {
    type: PKTypes.ADD_ORDER,
    newOrder: placedOrder
  };
}

export function closeOrder(orderId: number): PKTypes.PeacekeepersActionTypes {
  return {
    type: PKTypes.CLOSE_ORDER,
    orderId: orderId
  };
}

export function loadMainOrderList(): PKTypes.PeacekeepersActionTypes {
  return {
    type: PKTypes.LOAD_MAIN_ORDER_LIST
  };
}
