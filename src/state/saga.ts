import { registerLoadExampleEntitiesSaga } from "./example/saga";
import { SagaMiddleware } from "@redux-saga/core";

export function runSagas(saga: SagaMiddleware) {
  saga.run(registerLoadExampleEntitiesSaga);
}
