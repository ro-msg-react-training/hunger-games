import { Dictionary } from "lodash";
import { ExampleEntity } from "../../model/example-entity";

export interface ExampleState {
  loading: boolean;
  data: Dictionary<ExampleEntity>;
}

export const initialExampleState: ExampleState = {
  loading: true,
  data: {}
};
