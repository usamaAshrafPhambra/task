import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updateTodo } from "../actions/todo";

const UpdateTodo = (param, { updateTodo, history }) => {
  const [formData, setformData] = useState({
    title: param.location.state.title,

    id: param.location.state.id,
  });
  // useEffect(()=>{

  //   console.log('effect',param.location.state.id)

  // },[param.location.state.id])

  // const id = param.location.state.id
  const { title, id } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", title, id);
   
    // updateTodo(title, id, history, true);
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
