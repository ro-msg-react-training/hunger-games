import { combineReducers, createStore, compose } from "redux";
import { RestaurantDishesState } from "./RestaurantDishesSection/types";
import { restaurantDishesReducer } from "./RestaurantDishesSection/reducers";

// ex: prodListReducer : ProductListState;
export interface GlobalState {
    restDishesReducer : RestaurantDishesState
}

// ex: prodListReducer : productListReducer
const rootReducer = combineReducers({
    restDishesReducer : restaurantDishesReducer
});

// Lipseste partea de Saga

export function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}