import { IRestaurant, IFood, IUser, IDemands } from "../../model/entites";

export interface DemandsState {
  listOfOrders: IDemands[];
}
export const ADD_NEW_ORDER_ITEM = "ADD_NEW_ORDER_ITEM";
export const REMOVE_ORDER_ITEM = "REMOVE_ORDER_ITEM";
export const REMOVE_ORDER_ON_RESTAURANT = "REMOVE_ORDER_ON_RESTAURANT";

export interface DemOrderAdd {
  type: typeof ADD_NEW_ORDER_ITEM;
  currentRestaurant: IRestaurant;
  currentFood: IFood;
  currentUser: IUser;
}
export interface DemOrderRemove {
  type: typeof REMOVE_ORDER_ITEM;
  itemToRemove: IDemands;
  crtActiveUser: IUser;
}

export interface DemRemoveOrderOnRestaurant {
  type: typeof REMOVE_ORDER_ON_RESTAURANT;
  itemsToRemove: IDemands[];
}
export type DemandsActionTypes =
  | DemOrderAdd
  | DemOrderRemove
  | DemRemoveOrderOnRestaurant;
