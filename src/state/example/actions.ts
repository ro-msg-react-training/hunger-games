import { ExampleEntity } from "../../model/exemple-entity";

export enum ExampleActionTypes {
  LOAD = "[Example] Load entities",
  LOAD_SUCCESS = "[Example] Load entities - success"
}

export interface LoadExampleEntities {
  type: typeof ExampleActionTypes.LOAD;
}

export function loadExampleEntities(): LoadExampleEntities {
  return { type: ExampleActionTypes.LOAD };
}

export interface LoadExampleEntitiesSuccess {
  type: typeof ExampleActionTypes.LOAD_SUCCESS;
  data: ExampleEntity[];
}

export function loadExampleEntitiesSuccess(
  data: ExampleEntity[]
): LoadExampleEntitiesSuccess {
  return { type: ExampleActionTypes.LOAD_SUCCESS, data };
}

export type ExampleActionsUnion =
  | LoadExampleEntities
  | LoadExampleEntitiesSuccess;
