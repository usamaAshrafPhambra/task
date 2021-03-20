// import logo from './logo.svg';
import "./App.css";

import TaskForm from "./components/TaskForm";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <TaskForm />
    </Provider>
  );
}

export default App;
