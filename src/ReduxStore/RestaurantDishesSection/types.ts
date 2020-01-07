import { IUser, IRestaurant } from "../../model/entites";

export interface RestaurantDishesState {
    currentUser : IUser;
    currentRestaurant : IRestaurant;
    isOutsideOfWorkingHours : boolean;
}

export const LOAD_FOODS = "LOAD_FOODS";

export interface RDLoadFoodsAction {
    type : typeof LOAD_FOODS,
    restaurant : IRestaurant,
    currentUser : IUser,
    isOutsideOfWorkingHours : boolean
}

export type RestaurantDishesActionTypes = RDLoadFoodsAction;