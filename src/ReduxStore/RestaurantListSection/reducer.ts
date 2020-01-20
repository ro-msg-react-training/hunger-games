import * as RLTypes from "./types";
import restaurantList from "../../MockupData/restaurants.json";

export const initialState: RLTypes.RestaurantListState = {
  restaurantOrders:new Map<string,number>(),
  restaurants:[...restaurantList]
};

export function restaurantListReducer(
  state: RLTypes.RestaurantListState = initialState,
  action: RLTypes.RestaurantListActionTypes
): RLTypes.RestaurantListState {
  switch (action.type) {
    case RLTypes.CHANGE_ORDERS_NUMBER: {
      let contorOrders:number=Number(state.restaurantOrders.get(action.currentRestaurant.restaurant_name));
      return {
        restaurantOrders:state.restaurantOrders.set(action.currentRestaurant.restaurant_name,contorOrders),
        restaurants:state.restaurants
      };
    }
    default:
      return state;
  }
}
