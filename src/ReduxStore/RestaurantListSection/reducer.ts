import * as RLTypes from "./types";
import restaurantList from "../../MockupData/restaurants.json";
import RestaurantsInitializer from "../../component/Restaurants/RestaurantsSmartComponent";

export const initialState: RLTypes.RestaurantListState = {
  restaurantOrders:{} as any,
  restaurants:Object(restaurantList),
};

export function restaurantListReducer(
  state: RLTypes.RestaurantListState = initialState,
  action: RLTypes.RestaurantListActionTypes
): RLTypes.RestaurantListState {
  switch (action.type) {
    case RLTypes.INCREASE_ORDERS_NUMBER: {
      for(let i =0;i<state.restaurants.length;i++){
        if(state.restaurants[i].restaurant_name===action.currentRestaurant.restaurant_name){
          state.restaurants[i].orders_count+= 1;
          state.restaurants[i].toPay+=action.currentFood.price
        }
      }
      return {
        restaurantOrders:state.restaurantOrders,
        restaurants:[...state.restaurants]
      };
      
    }
    case RLTypes.DECREASE_ORDERS_NUMBER: {
      for(let i =0;i<state.restaurants.length;i++){
        if(state.restaurants[i].restaurant_name===action.currentRestaurant.name){
          state.restaurants[i].orders_count-= 1;
        }
      }
      return {
        restaurantOrders:state.restaurantOrders,
        restaurants:[...state.restaurants]
      };
      
    }
    default:
      return state;
  }
}
