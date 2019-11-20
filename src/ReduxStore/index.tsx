import { combineReducers, createStore, compose } from "redux";

// ex: prodListReducer : ProductListState;
export interface GlobalState {

}

// ex: prodListReducer : productListReducer
const rootReducer = combineReducers({

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