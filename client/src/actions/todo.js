//ACTION FOR GET TODO
export const getTodo = (id) => {
  return { type: "GET_TODO", payload: id };
};

//ACTION FOR ADD TODO
export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
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
export const updateTodo = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: data,
  };
};
