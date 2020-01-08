import  * as PKTypes from "./types";
import Orders from '../../MockupData/orders.json';
import { IOrders } from "../../model/entites";

let initialOrders: IOrders[] = Object(Orders);

export const initialState: PKTypes.PeacekeepersState = {
    placedOrders : [...initialOrders]
};

export function peacekeepersReducer(state: PKTypes.PeacekeepersState = initialState, action: PKTypes.PeacekeepersActionTypes): PKTypes.PeacekeepersState {
    switch (action.type) {
        case PKTypes.ADD_ORDER: {
            let ordersListWithTheNewOrder : IOrders[] = [...state.placedOrders, action.newOrder];

            return {
                placedOrders : ordersListWithTheNewOrder
            }
        }

        case PKTypes.CLOSE_ORDER: {
            let orderIndex = state.placedOrders.findIndex(i => i.order_id === action.orderClosing.order_id);

            if(orderIndex > -1) {
                return {
                    placedOrders : state.placedOrders.splice(orderIndex, 1)
                };
            } else {
                return {
                    ...state
                };
            }
        }

        default: {
            return state;
        }
    }
}