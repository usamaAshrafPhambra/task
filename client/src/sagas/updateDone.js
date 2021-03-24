import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* updateDoneSaga(action) {
  const { payload, id } = action;

  try {
    const todo = yield call(API.updateDone, payload, id);

    yield put({ type: "UPDATE_DONE_S", payload: todo });
  } catch (e) {
    console.error(e, "error");
  }
}

export function* waitForUpdateDone() {
  yield takeEvery("UPDATE_DONE", updateDoneSaga);
}
