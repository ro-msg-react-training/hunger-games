import * as RLTypes from "./types";
import { IRestaurant, RestaurantDemands, IFood } from "../../model/entites";

export function increadseNumberOfOrdersEventHandler( currentRestaurant:IRestaurant, currentFood:IFood
): RLTypes.RLIncreaseOrdersNumberEvent {
  return {
    type: RLTypes.INCREASE_ORDERS_NUMBER,
    currentRestaurant:currentRestaurant,
    currentFood:currentFood,
  };
}
export function decreadseNumberOfOrdersEventHandler( currentRestaurant:RestaurantDemands
  ): RLTypes.RLDecreaseOrdersNumberEvent {
    return {
      type: RLTypes.DECREASE_ORDERS_NUMBER,
      currentRestaurant:currentRestaurant
    };
  }

