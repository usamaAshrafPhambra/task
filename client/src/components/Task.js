
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { addTask } from "../actions/task";
import { deleteTask } from "../actions/task";
import { fetchTaskList } from "../actions/task";
import { updateTask } from "../actions/task";

const Task = ({ fetchTaskList, deleteTask, updateTask, data,}) => {

    useEffect(() => {
        fetchTaskList();
      }, [data]);
      const taskLists =
      data !== undefined &&
      data.map((task) => (
        <tr key={task._id}>
          <td>
            <Link to={`/todo/${task._id}`}>{task.name}</Link>
          </td>
          <td>
            <i className="fas fa-pen"></i>
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
        <p className="btn my">
        <Link to="/">Go to add task</Link>
      </p>
      
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
};

const mapStateToProps = (state) => ({
    data: state.task.taskList,
    task: state.task.task,
  });

export default connect(mapStateToProps, {fetchTaskList,
    deleteTask,
    updateTask,})(Task);
