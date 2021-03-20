import { all } from "redux-saga/effects";


import {waitForAddTask} from './sagas/addTask'
import {waitForTaskList} from './sagas/getTaskList'
import {waitForDeleteTask} from './sagas/deleteTask'


export default function* index() {
  yield all([
    waitForAddTask(),
    waitForTaskList(),
    waitForDeleteTask(),
   
    ]);
}
