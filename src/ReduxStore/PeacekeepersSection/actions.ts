import * as PKTypes from "./types";
import { IOrders } from "../../model/entites";

export function addOrderToList(placedOrder : IOrders) : PKTypes.PeacekeepersActionTypes {
    return {
        type : PKTypes.ADD_ORDER,
        newOrder : placedOrder
    };
}

export function closeOrder(completedOrder : IOrders) : PKTypes.PeacekeepersActionTypes {
    return {
        type : PKTypes.CLOSE_ORDER,
        orderClosing : completedOrder
    };
}