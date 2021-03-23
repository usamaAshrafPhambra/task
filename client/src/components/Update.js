import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router';
import { connect } from "react-redux";

import { updateTask } from "../actions/task";

const Update = ({ updateTask,history }) => {
  const [formData, setformData] = useState({
    name: "",
  });
  const task = useLocation();
  
 
  useEffect(() => {
    setformData({
      name: !task.state.name ? " " : task.state.name,
    });
    
  }, [task]);
  
    

  const  {name}  = formData;
  const id = task.state.id;
  const onChange = (e) => {
    setformData({ ...formData, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    updateTask(name,id);
    history.push('/task')
  };

  return (
    <div className="container">
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
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
          value="Update"
          variant="contained"
          color="primary"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default connect(null, { updateTask })(Update);
