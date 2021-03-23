import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Update from './Update';
// import { addTask } from "../actions/task";
import { deleteTask } from "../actions/task";
import { fetchTaskList } from "../actions/task";
// import { updateTask } from "../actions/task";

const Task = ({ fetchTaskList, deleteTask, data, history }) => {
  // const handleClick = (task)=>{
  //   console.log(task)
    
  //   console.log(task);
  //   history.push( `/update/${task.id}`,task)
  // }

  

  useEffect(() => {
    fetchTaskList();
  }, [fetchTaskList, data]);
  const taskLists =
    data !== undefined &&
    data.map((task) => (
      <tr key={task._id}>
        <td>
          <Link to={`/todo/${task._id}`}>{task.name}</Link>
        </td>
        <td>
         {/* <Link to={{pathname: `/update/${task._id}`,
         state:{id : task._id,name : task.name}
        }}> */}
            <i
            onClick={(e) => { 
              // handleClick({id : task._id,name : task.name})
              history.push(`/update/${task._id}`,{id : task._id,name : task.name})
            }}
            className="fas fa-pen"
          ></i>
          {/* </Link> */}
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

export default connect(mapStateToProps, {
  fetchTaskList,
  deleteTask,
})(withRouter(Task));
