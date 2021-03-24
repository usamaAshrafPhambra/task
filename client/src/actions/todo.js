//ACTION FOR GET TODO
export const getTodo = (id) => {
  return { type: "GET_TODO", payload: id };
};

//ACTION FOR ADD TODO
export const addTodo = (data, id) => {
  return {
    type: "ADD_TODO",
    payload: data,
    id: id,
  };
};

//ACTION FOR DELETE TOD
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

//ACTION FOR UPDATE TODO
export const updateTodo = (title, id) => {
  return {
    type: "UPDATE_TODO",
    payload: title,
    id: id,
  };
};

//ACTION FOR UPDATE DONE
export const doneTodo = (done, id) => {
  return {
    type: "UPDATE_DONE",
    payload: done,
    id: id,
  };
};
