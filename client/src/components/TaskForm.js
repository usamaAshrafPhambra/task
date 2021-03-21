import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addTask } from "../actions/task";


function TaskForm({ addTask }) {
  const [formData, setformData] = useState({
    name: "",
  });

  const { name } = formData;

  const onChange = (e) => {
    setformData({ ...formData, name: e.target.value });
  };

 

  const onSubmit = (e) => {
    e.preventDefault();

    addTask(name);
  };

  
 
     

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
      <p className="btn my-1">
        <Link to="/task">Getting to tasks</Link>
      </p>
     
    </div>
  );
}



export default connect(null, {
  addTask,
  
})(TaskForm);
