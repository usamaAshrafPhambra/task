import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { connect } from "react-redux";

import { updateTodo } from "../actions/todo";

const UpdateTodo = ({ updateTodo, history, }) => {
  const [formData, setformData] = useState({
    title: "",
  });
  const todo = useLocation();

  useEffect(() => {
    setformData({
      title: !todo.state.title ? " " : todo.state.title,
    });
  }, [todo]);

  const { title } = formData;
  const id = todo.state.id;
  
  const onChange = (e) => {
    setformData({ ...formData, title: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    updateTodo(title, id);
    history.push(`/todo/${todo.state.todo_id}`)
  };
  return (
    <div className="container">
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
          type="submit"
          value="update"
          variant="contained"
          color="primary"
          className="btn btn-primary my-1"
        />
      </form>
    </div>
  );
};



export default connect(null, { updateTodo })(UpdateTodo);
