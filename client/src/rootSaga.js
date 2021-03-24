import { all } from "redux-saga/effects";

import { waitForAddTask } from "./sagas/addTask";
import { waitForTaskList } from "./sagas/getTaskList";
import { waitForDeleteTask } from "./sagas/deleteTask";
import { waitForUpdateTask } from "./sagas/updateTask";

import { waitForGetTodo } from "./sagas/getTodo";
import { waitForAddTodo } from "./sagas/addTodo";
import { waitForDeleteTodo } from "./sagas/deleteTodo";
import { waitForUpdateTodo } from "./sagas/updateTodo";
import { waitForUpdateDone } from "./sagas/updateDone";


export default function* index() {
  yield all([
    waitForAddTask(),
    waitForTaskList(),
    waitForDeleteTask(),
    waitForUpdateTask(),
    waitForGetTodo(),
    waitForAddTodo(),
    waitForDeleteTodo(),
    waitForUpdateTodo(),
    waitForUpdateDone(),
  ]);
}
