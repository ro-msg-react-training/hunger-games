import { combineReducers, createStore, compose } from "redux";
import { RestaurantDishesState } from "./RestaurantDishesSection/types";
import { restaurantDishesReducer } from "./RestaurantDishesSection/reducers";
import { NotificationState } from "./NotificationSection/types";
import { notificationReducer } from "./NotificationSection/reducers";
import { RegisterState } from "./RegisterSection/types";
import { registerReducer } from "./RegisterSection/reducer";
import { LoginState } from "./LoginSection/types";
import { loginReducer } from "./LoginSection/reducer";
import { NavbarState } from "./NavbarSection/types";
import { navbarReducer } from "./NavbarSection/reducers";

// ex: prodListReducer : ProductListState;
export interface GlobalState {
    restDishesReducer : RestaurantDishesState,
    notReducer : NotificationState,
    registerReducerGlobal : RegisterState,
    loginReducerGlobal : LoginState,
    navReducerGlobal : NavbarState
}

// ex: prodListReducer : productListReducer
const rootReducer = combineReducers({
    restDishesReducer : restaurantDishesReducer,
    notReducer : notificationReducer,
    registerReducerGlobal : registerReducer,
    loginReducerGlobal : loginReducer,
    navReducerGlobal : navbarReducer
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