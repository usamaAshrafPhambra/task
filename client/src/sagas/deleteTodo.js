import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* deleteTodoSaga(action) {
  const { payload } = action;

  try {
    const task = yield call(API.deleteTodo, payload);

    yield put({ type: "DELETE_TODO_S", payload: task });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForDeleteTodo() {
  yield takeEvery("DELETE_TODO", deleteTodoSaga);
}
