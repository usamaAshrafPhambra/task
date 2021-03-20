import axios from "axios";

// GETING TASK LIST
export const fetchTaskList = () => {
  return axios.get("http://localhost:6060").then((res) => res.data);
};

//post request for add task
export const addTask = (data) => {
  
  return axios
    .post("http://localhost:6060", {name:data})
    .then((res) => res.data);
};

//delete request for task
export const deleteTask = (id) =>{
  
  return axios
  .delete(`http://localhost:6060/${id}`, {id : id})
  .then((res) => res.data);
};









