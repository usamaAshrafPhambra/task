import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { del } from "request";

import { addTask } from "../actions/task";
import { deleteTask } from "../actions/task";
import { fetchTaskList } from "../actions/task";


function TaskForm({ addTask, fetchTaskList, deleteTask, data }) {
  const [formData, setformData] = useState({
    name: "",
  });

  

  const { name } = formData;

  const onChange = (e) => {
    setformData({ name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTask(name);
    
  };

  useEffect(() => {
    fetchTaskList();
  }, [data]);

  const taskLists =
    data !== undefined &&
    data.map((task) => (
      <tr key={task._id}>
        <td>{task.name}</td>
        <td>
          <i 
         
          className="fas fa-pen"></i>
        </td>
        <td>
          <i
            onClick={(e) => {
              deleteTask(task._id);
            }}
            className="fas fa-trash"
          ></i>
        </td>
      </tr>
    ));

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
          className="my-1"
        />
        <input
          type="submit"
          variant="contained"
          color="primary"
          className="btn btn-primary"
        />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{taskLists}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.task.taskList,
});

export default connect(mapStateToProps, { addTask, fetchTaskList, deleteTask })(
  TaskForm
);
