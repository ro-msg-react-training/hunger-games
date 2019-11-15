import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import { routerMiddleware } from "connected-react-router";
import { history } from "./history";
import createSagaMiddleware from "@redux-saga/core";
import { runSagas } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();
const router = routerMiddleware(history);

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(router), applyMiddleware(saga))
);

runSagas(saga);
