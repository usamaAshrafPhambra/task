import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* getTodoSaga(action) {
  const { payload } = action;
  
  try {
    const task = yield call(API.getTodo, payload);

    yield put({ type: "GET_TODO_S", payload: task });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForGetTodo() {
  yield takeEvery("GET_TODO", getTodoSaga);
}
