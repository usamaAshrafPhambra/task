import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTodo } from "../actions/todo";
import { addTodo } from "../actions/todo";
import { deleteTodo } from "../actions/todo";

import Moment from "react-moment";

function Todo({ data, match, getTodo, addTodo, deleteTodo }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  const { title, date } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(formData, match.params.id);
  };

  useEffect(() => {
    getTodo(match.params.id);
  }, [getTodo, match.params.id, data]);

  const todoLists =
    data !== undefined &&
    data.map((todo) => (
      <tr key={todo._id}>
        <td>{todo.title}</td>
        <td>
          <Moment format='DD/MM/YYYY'>{todo.date}</Moment>
        </td>
        <td>
          <i className="fas fa-pen"></i>
        </td>
        <td>
          <i
            onClick={(e) => {
              deleteTodo(todo._id);
            }}
            className="fas fa-trash"
          ></i>
        </td>
      </tr>
    ));

  return (
    <div className="container">
      <p className="btn">
        <Link to="/task">Go To List</Link>
      </p>
      <p className="btn my-1">
        <Link to="/">Go to add task</Link>
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
          required
          className="my-1"
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={date}
          onChange={(e) => onChange(e)}
          required
          className="my-1"
        />
        <input
          type="submit"
          variant="contained"
          color="primary"
          className="btn btn-primary my-1"
        />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{todoLists}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.todo.todos,
});

export default connect(mapStateToProps, { getTodo, addTodo, deleteTodo })(Todo);
