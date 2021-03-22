import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* addTodoSaga(action) {
  const { payload,id } = action;
  
  try {
    const todo = yield call(API.addTodo, payload,id);

    yield put({ type: "ADD_TODO_S", payload: todo });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForAddTodo() {
  yield takeEvery("ADD_TODO", addTodoSaga);
}
