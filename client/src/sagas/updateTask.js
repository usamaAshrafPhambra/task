import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* updateTaskSaga(action) {
  const { payload,id } = action;
  
  console.log('sagas action',payload , id)
  try {
    const task = yield call(API.updateTaskR, payload ,id);
    console.log('sagas try', task)
    yield put({ type: "UPDATE_TASK_S", payload: task });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForUpdateTask() {
  yield takeEvery("UPDATE_TASK", updateTaskSaga);
}
