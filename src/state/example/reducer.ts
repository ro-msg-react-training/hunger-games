import { chain } from "lodash";

import { initialExampleState, ExampleState } from "./state";
import { ExampleActionsUnion, ExampleActionTypes } from "./actions";

export function exampleReducer(
  state = initialExampleState,
  action: ExampleActionsUnion
): ExampleState {
  switch (action.type) {
    case ExampleActionTypes.LOAD:
      return { ...state, loading: true };
    case ExampleActionTypes.LOAD_SUCCESS:
      return { ...state, loading: false, data: chain(action.data).keyBy('id').value() };
    default:
      return state;
  }
}
