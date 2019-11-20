import { call, put, takeEvery } from "redux-saga/effects";
import { exampleService } from "../../service/example-service";
import { ExampleEntity } from "../../model/exemple-entity";
import { loadExampleEntitiesSuccess, ExampleActionTypes } from "./actions";

function* loadExampleEntitiesSaga() {
  const data: ExampleEntity[] = yield call(exampleService.loadAll);
  yield put(loadExampleEntitiesSuccess(data));
}

export function* registerLoadExampleEntitiesSaga() {
  yield takeEvery(ExampleActionTypes.LOAD, loadExampleEntitiesSaga);
}
