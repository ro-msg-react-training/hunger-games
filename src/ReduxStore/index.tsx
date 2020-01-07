import { combineReducers, createStore, compose } from "redux";
import { RestaurantDishesState } from "./RestaurantDishesSection/types";
import { restaurantDishesReducer } from "./RestaurantDishesSection/reducers";
import { NotificationState } from "./NotificationSection/types";
import { notificationReducer } from "./NotificationSection/reducers";
import { RegisterState } from "./RegisterSection/types";
import { registerReducer } from "./RegisterSection/reducer";
import { LoginState } from "./LoginSection/types";
import { loginReducer } from "./LoginSection/reducer";
import { RestaurantsComponentState } from "../component/Restaurants/RestaurantsSmartComponent";
import { restaurantListReducer } from "./RestaurantListSection/reducer";
import { PeacekeepersState } from "./PeacekeepersSection/types";
import { peacekeepersReducer } from "./PeacekeepersSection/reducers";
import { PeacekeepersDetailedState } from "./PeacekeepersDetailedSection/types";
import { peacekeepersDetailedReducer } from "./PeacekeepersDetailedSection/reducers";

// ex: prodListReducer : ProductListState;
export interface GlobalState {
    restDishesReducer : RestaurantDishesState,
    restReducer: RestaurantsComponentState,
    notReducer : NotificationState,
    registerReducerGlobal : RegisterState,
    loginReducerGlobal : LoginState,
    peacekeeperReducerGlobal : PeacekeepersState,
    peacekeeperDetailedReducerGlobal : PeacekeepersDetailedState
}

// ex: prodListReducer : productListReducer
const rootReducer = combineReducers({
    restDishesReducer : restaurantDishesReducer,
    restReducer: restaurantListReducer,
    notReducer : notificationReducer,
    registerReducerGlobal : registerReducer,
    loginReducerGlobal : loginReducer,
    peacekeeperReducerGlobal : peacekeepersReducer,
    peacekeeperDetailedReducerGlobal : peacekeepersDetailedReducer
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