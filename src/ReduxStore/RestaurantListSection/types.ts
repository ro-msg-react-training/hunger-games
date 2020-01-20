import { IRestaurant } from "../../model/entites";

export interface RestaurantListState {
  restaurantOrders:Map<string,number>,
  restaurants:IRestaurant[],
}
export const CHANGE_ORDERS_NUMBER = "CHANGE_ORDERS_NUMBER";

export interface RLOrdersNumberEvent {
  type: typeof CHANGE_ORDERS_NUMBER;
  currentRestaurant:IRestaurant
}

export type RestaurantListActionTypes = RLOrdersNumberEvent;
