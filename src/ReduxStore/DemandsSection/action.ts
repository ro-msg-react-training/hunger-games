import * as DTypes from "./types";
import { IRestaurant, IFood, IUser, IDemands } from "../../model/entites";

export function newOrderItemEvent( currentRestaurant:IRestaurant,currentFood:IFood,currentUser:IUser
): DTypes.DemOrderAdd {
  return {
    type: DTypes.ADD_NEW_ORDER_ITEM,
    currentRestaurant:currentRestaurant,
    currentFood:currentFood,
    currentUser:currentUser
  };
}
export function removeOrderItemEvent( orderToRemove:IDemands,crtActiveUser:IUser): DTypes.DemOrderRemove {
    return {
      type: DTypes.REMOVE_ORDER_ITEM,
      itemToRemove:orderToRemove,
      crtActiveUser:crtActiveUser
    };
  }

  export function removeOrderOnRestaurantEvent( itemsToRemove:IDemands[]): DTypes.DemRemoveOrderOnRestaurant {
    return {
      type: DTypes.REMOVE_ORDER_ON_RESTAURANT,
      itemsToRemove:itemsToRemove,
    };
  }
