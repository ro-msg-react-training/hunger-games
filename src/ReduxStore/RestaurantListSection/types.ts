import { IRestaurant, RestaurantDemands, IFood } from "../../model/entites";

export interface RestaurantListState {
  restaurantOrders:Map<string,number>,
  restaurants:IRestaurant[],
}
export const INCREASE_ORDERS_NUMBER = "INCREASE_ORDERS_NUMBER";
export const DECREASE_ORDERS_NUMBER = "DECREASE_ORDERS_NUMBER";
export const RELOAD_ORDERS_NUMBER = "RELOAD_ORDERS_NUMBER";


export interface RLIncreaseOrdersNumberEvent {
  type: typeof INCREASE_ORDERS_NUMBER;
  currentRestaurant:IRestaurant,
  currentFood:IFood,
}
export interface RLDecreaseOrdersNumberEvent {
  type: typeof DECREASE_ORDERS_NUMBER;
  currentRestaurant:RestaurantDemands,
}

export interface RLReloadOrdersNumber {
  type: typeof RELOAD_ORDERS_NUMBER;
  restaurant_id:number,
}
 
export type RestaurantListActionTypes = RLIncreaseOrdersNumberEvent|RLDecreaseOrdersNumberEvent|RLReloadOrdersNumber;
