import * as RLTypes from "./types";

export const initialState: RLTypes.RestaurantListState = {
  currentRestaurant:{} as any,
  nrOfOrders:0
};

export function restaurantListReducer(
  state: RLTypes.RestaurantListState = initialState,
  action: RLTypes.RestaurantListActionTypes
): RLTypes.RestaurantListState {
  switch (action.type) {
    case RLTypes.CHANGE_ORDERS_NUMBER: {
      return {
        currentRestaurant: action.currentRestaurant,
        nrOfOrders: state.nrOfOrders+ 1
      };
    }
    default:
      return state;
  }
}
