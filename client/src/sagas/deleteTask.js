import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* deleteTaskSaga(action) {
  const { payload } = action;

  try {
    const task = yield call(API.deleteTask, payload);

    yield put({ type: "DELETE_TASK_S", payload: task });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForDeleteTask() {
  yield takeEvery("DELETE_TASK", deleteTaskSaga);
}
