import { takeEvery, call, put } from "redux-saga/effects";


import * as API from "../services/API";

function* fetchTaskListSaga() {
  try {
    const tasks = yield call(API.fetchTaskList);
    
    yield put({type:'FETCH_TASK_LIST_SS',payload:tasks});
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForTaskList() {
  yield takeEvery("FETCH_TASK_LIST", fetchTaskListSaga);
}
