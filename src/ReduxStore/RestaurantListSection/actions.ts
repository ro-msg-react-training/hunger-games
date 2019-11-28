import * as RLTypes from "./types";
import { IRestaurant } from "../../model/entites";

export function ChangeNumberOfOrdersEventHandler( currentRestaurant:IRestaurant
): RLTypes.RLOrdersNumberEvent {
  return {
    type: RLTypes.CHANGE_ORDERS_NUMBER,
    currentRestaurant:currentRestaurant
  };
}

