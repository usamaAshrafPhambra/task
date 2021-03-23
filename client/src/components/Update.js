import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { updateTask } from "../actions/task";

const Update = (task,{ updateTask }) => {
  const [formData, setformData] = useState({
    name: "",
  });
  useEffect(() => {
    setformData({
      name: !task.location.state.name ? " " : task.location.state.name,
    });
    // console.log(state)
  }, [task]);

  const { name } = formData;
  const id = task.location.state.id;
  const onChange = (e) => {
    setformData({ ...formData, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, id);
    updateTask(name, )
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
