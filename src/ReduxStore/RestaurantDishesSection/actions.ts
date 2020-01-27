import * as RDTypes from "./types";
import { IUser, IRestaurant } from "../../model/entites";

export function loadFoodsList(
  restaurant: IRestaurant,
  currentUser: IUser,
  outsideWorkingHours: boolean
): RDTypes.RestaurantDishesActionTypes {
  return {
    type: RDTypes.LOAD_FOODS,
    restaurant: restaurant,
    currentUser: currentUser,
    isOutsideOfWorkingHours: outsideWorkingHours
  };
}
