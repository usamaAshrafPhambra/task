// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import Todo from "./components/Todo";
import Task from "./components/Task";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/task" component={Task} />
          <Route exact path="/" component={TaskForm} />
          <Route exact path="/todo/:id" component={Todo} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
