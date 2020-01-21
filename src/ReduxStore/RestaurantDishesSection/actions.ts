import * as RDTypes from './types';
import { IUser, IRestaurant } from '../../model/entites';

export function LoadFoodsList(restaurant : IRestaurant, currentUser : IUser) : RDTypes.RestaurantDishesActionTypes {
    return {
        type : RDTypes.LOAD_FOODS,
        restaurant : restaurant,
        currentUser : currentUser
    };
}