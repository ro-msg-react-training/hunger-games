import * as RDTypes from "./types";

export const initialState : RDTypes.RestaurantDishesState = {
    currentUser : {} as any,
    availableFoods : []
};

export function restaurantDishesReducer (state : RDTypes.RestaurantDishesState = initialState, action : RDTypes.RestaurantDishesActionTypes) : RDTypes.RestaurantDishesState {
    switch(action.type) {
        case RDTypes.LOAD_FOODS: {
            return {
                currentUser : action.currentUser,
                availableFoods : action.restaurant.food_list
            };
        }

        default:
            {
                return state;
            }
    }
}