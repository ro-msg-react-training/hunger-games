import * as DTypes from "./types";
import {
  emptyRestaurantDemands,
  emptyFoodDemands,
  emptyUserDemands,
  IDemands
} from "../../model/entites";
import _ from "lodash";

export const initialState: DTypes.DemandsState = {
  listOfOrders: []
};

export function demandsOrdersReducer(
  state: DTypes.DemandsState = initialState,
  action: DTypes.DemandsActionTypes
): DTypes.DemandsState {
  switch (action.type) {
    case DTypes.ADD_NEW_ORDER_ITEM: {
      let crtIndex: number = state.listOfOrders.length;
      let itemDemand: IDemands = _.cloneDeep({
        restaurant: emptyRestaurantDemands,
        food: emptyFoodDemands,
        user: emptyUserDemands
      });
      itemDemand.restaurant.name = action.currentRestaurant.restaurant_name;
      itemDemand.restaurant.id = action.currentRestaurant.id;
      itemDemand.food.food_name = action.currentFood.food_name;
      itemDemand.food.food_price = action.currentFood.price;
      itemDemand.food.food_id = action.currentFood.id_food;
      itemDemand.user.username = action.currentUser.username;
      itemDemand.user.user_id = action.currentUser.id;
      state.listOfOrders[crtIndex] = itemDemand;

      return {
        ...state
      };
    }
    case DTypes.REMOVE_ORDER_ITEM: {
      let itemToRemove: IDemands = action.itemToRemove;
      const index = state.listOfOrders.indexOf(itemToRemove, 0);
      if (
        index > -1 &&
        state.listOfOrders[index].user.username ===
          action.crtActiveUser.username
      ) {
        state.listOfOrders.splice(index, 1);
      }
      return {
        listOfOrders: [...state.listOfOrders]
      };
    }

    case DTypes.REMOVE_ORDER_ON_RESTAURANT: {
      let itemsToRemove: IDemands[] = action.itemsToRemove;
      for (let i = 0; i < itemsToRemove.length; i++) {
        const index = state.listOfOrders.indexOf(itemsToRemove[i], 0);
        state.listOfOrders.splice(index, 1);
      }
      return {
        listOfOrders: [...state.listOfOrders]
      };
    }

    default:
      return state;
  }
}
