import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* updateTaskSaga(action) {
  const { payload, id } = action;

  try {
    const task = yield call(API.updateTaskR, payload, id);

    yield put({ type: "UPDATE_TASK_S", payload: task });
  } catch (e) {
    console.error(e, "error");
  }
}

export function* waitForUpdateTask() {
  yield takeEvery("UPDATE_TASK", updateTaskSaga);
}
