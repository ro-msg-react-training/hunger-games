import * as RDTypes from "./types";

export const initialState: RDTypes.RestaurantDishesState = {
    currentUser: {
        "id": 0,
        "email": "noMail@msg.group",
        "username": "noUsername",
        "password": "noPassword"
    },
    currentRestaurant: {
        "id": 0,
        "restaurant_name": "No Name Restaurant",
        "adress": "Unknown address",
        "opening_hour": "00:00 AM",
        "closing_hour": "00:00 PM",
        "image": "http://dummyimage.com/137x180.jpg/ff4444/ffffff",
        "food_list": []
    }
};

export function restaurantDishesReducer(state: RDTypes.RestaurantDishesState = initialState, action: RDTypes.RestaurantDishesActionTypes): RDTypes.RestaurantDishesState {
    switch (action.type) {
        case RDTypes.LOAD_FOODS: {
            return {
                currentUser: action.currentUser,
                currentRestaurant: action.restaurant
            };
        }

        default: {
            return state;
        }
    }
}