// ACTION FOR get task list
export const fetchTaskList = () => {
  return { type: "FETCH_TASK_LIST" };
};

//ACTION FOR ADD TASK
export const addTaskList = () => {
  return { type: "ADD_TASK" };
};

export const addTask = (name) => {
  return {
    type: "ADD_TASK",
    payload: name,
  };
};

//ACTION FOR DELETE TASK
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

//ACTION FOR UPDATE TASK

export const updateTask = (name, id) => {
  return {
    type: "UPDATE_TASK",
    payload: name,
    id: id,
  };
};
