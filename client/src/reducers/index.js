import { combineReducers } from "redux";
import task from "./task";
import todo from "./todo"

export default combineReducers({
  task,
  todo
});
    