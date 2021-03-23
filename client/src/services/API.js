import axios from "axios";

// GETING TASK LIST
export const fetchTaskList = () => {
  return axios.get("/task").then((res) => res.data);
};

//post request for add task
export const addTask = (data) => {
  
  return axios
    .post("", {name:data})
    .then((res) => res.data);
};

//delete request for task
export const deleteTask = (id) =>{
  
  return axios
  .delete(`/task/${id}`, {id : id})
  .then((res) => res.data);
};

//update request for task
export const updateTaskR = (id,name) =>{
  console.log(id,name)
  return axios
  .put(`/update/${id}`, {id : id, name : name})
  .then((res) => res.data);
};


//geting todo
export const getTodo = (id) => {
  
  return axios.get(`/todo/${id}`, {id : id}).then((res) => res.data);
};



//add todo
export const addTodo = (data, id) => {
  
  return axios
    .post(`/todo/${id}`, {title : data.title, date : data.date, id:id})
    .then((res) => res.data);
};

//delete todo 

export const deleteTodo = (id) =>{
 
  return axios
  .delete(`/todo/${id}`, {id : id})
  .then((res) => res.data);
};


//update request for todo
export const updateTodo = (id,data) =>{
  
  return axios
  .put(`/todoupdate/${id}`, {title : data.title, date : data.date, id:id})
  .then((res) => res.data);
};








