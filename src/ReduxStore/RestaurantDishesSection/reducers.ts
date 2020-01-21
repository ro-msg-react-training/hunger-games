import * as RDTypes from "./types";
import { emptyRestaurant, emptyUser } from "../../model/entites";

export const initialState: RDTypes.RestaurantDishesState = {
    currentUser: emptyUser,
    currentRestaurant: emptyRestaurant,
    isOutsideOfWorkingHours : false
};

export function restaurantDishesReducer(state: RDTypes.RestaurantDishesState = initialState, action: RDTypes.RestaurantDishesActionTypes): RDTypes.RestaurantDishesState {
    switch (action.type) {
        case RDTypes.LOAD_FOODS: {
            return {
                currentUser: action.currentUser,
                currentRestaurant: action.restaurant,
                isOutsideOfWorkingHours : action.isOutsideOfWorkingHours
            };
        }

        default: {
            return state;
        }
    }
}