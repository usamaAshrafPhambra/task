const initialState = {
  taskList: [],
  tasks: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_TASK_LIST_SS":
      return {
        ...state,
        taskList: payload,
      };
    case "ADD_TASK_S":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };

      case "DELETE_TASK_S":
      return {
        ...state,
        taskList : state.taskList.filter(task=>task._id !== payload)
      };
     
    default:
      return state;
  }
}
