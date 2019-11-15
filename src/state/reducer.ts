import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "./history";
import { exampleReducer } from "./example/reducer";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  example: exampleReducer
});
