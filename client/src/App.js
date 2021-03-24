// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import Todo from "./components/Todo";
import Task from "./components/Task";
import Update from "./components/Update";
import UpdateTodo from "./components/UpdateTodo";



import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/task" component={Task} />
          <Route exact path="/update/:id" component={Update} />
          <Route exact path="/" component={TaskForm} />
          <Route exact path="/todo/:id" component={Todo} />
          <Route exact path="/todoupdate/:id/" component={UpdateTodo} />

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
