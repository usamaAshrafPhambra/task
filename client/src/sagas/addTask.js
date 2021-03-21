import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* addTaskSaga(action) {
  const { payload } = action;

  try {
    const task = yield call(API.addTask, payload);

    yield put({ type: "ADD_TASK_S", payload: task });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForAddTask() {
  yield takeEvery("ADD_TASK", addTaskSaga);
}
