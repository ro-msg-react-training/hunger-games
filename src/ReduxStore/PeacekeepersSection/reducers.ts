import * as PKTypes from "./types";
import { IOrders } from "../../model/entites";

export const initialState: PKTypes.PeacekeepersState = {
    placedOrders: [] as IOrders[]
};

export function peacekeepersReducer(state: PKTypes.PeacekeepersState = initialState, action: PKTypes.PeacekeepersActionTypes): PKTypes.PeacekeepersState {
    switch (action.type) {
        case PKTypes.ADD_ORDER: {
            let ordersListWithTheNewOrder: IOrders[] = [...state.placedOrders, action.newOrder];

            return {
                placedOrders: ordersListWithTheNewOrder
            }
        }

        case PKTypes.CLOSE_ORDER: {
            return {
                placedOrders: [...closeOrderByIndex(state.placedOrders, action.orderId)]
            };

        }

        case PKTypes.LOAD_MAIN_ORDER_LIST: {
            return {
                placedOrders: state.placedOrders
            }
        }

        default: {
            return state;
        }
    }
}

function closeOrderByIndex(ordersList: IOrders[], orderIndex: number): IOrders[] {
    let orders : IOrders[] = ordersList;

    orders[orderIndex-1].orderIsActive = false;

    return [...orders];
}