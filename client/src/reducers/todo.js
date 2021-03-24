const initialState = {
  todo: [],
  todos: [],
};

function todo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODO_S":
      return {
        ...state,
        todos: payload,
      };
    case "ADD_TODO_S":
      return {
        ...state,
        todo: [...state.todo, payload],
      };

    case "DELETE_TODO_S":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
      };

    case "UPDATE_TODO_S":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, todo: action.payload }
            : todo
        ),
      };
    case "UPDATE_DONE_S":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, todo: action.payload }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todo;
