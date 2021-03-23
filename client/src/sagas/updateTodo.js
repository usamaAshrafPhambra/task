import { takeEvery, call, put } from "redux-saga/effects";

import * as API from "../services/API";

function* updateTodoSaga(action ,) {
  const { payload,id } = action;
  
  try {
    const todo = yield call(API.updateTodo, payload, id);
     
    yield put({ type: "UPDATE_TODO_S", payload: todo });
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForUpdateTodo() {
  yield takeEvery("UPDATE_TODO", updateTodoSaga);
}
