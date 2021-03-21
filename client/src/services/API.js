import axios from "axios";

// GETING TASK LIST
export const fetchTaskList = () => {
  return axios.get("http://localhost:6060/task").then((res) => res.data);
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
  .delete(`http://localhost:6060/task/${id}`, {id : id})
  .then((res) => res.data);
};

//update request for task
export const updateTask = (id,name) =>{
  console.log('api',id,name)
  return axios
  .put(`http://localhost:6060/${id}`, {id : id, name : name})
  .then((res) => res.data);
};

export const getTodo = (id) => {
  return axios.get(`http://localhost:6060/todo/${id}`).then((res) => res.data);
};



//add todo
export const addTodo = (data, id) => {
  console.log('API' , data)
  return axios
    .post(`http://localhost:6060/todo/${id}`, {title : data.title, date : data.date})
    .then((res) => res.data);
};

//delete todo 

export const deleteTodo = (id) =>{
 
  return axios
  .delete(`http://localhost:6060/todo/${id}`, {id : id})
  .then((res) => res.data);
};


//update request for task
export const updateTodo = (id,data) =>{
  
  return axios
  .put(`http://localhost:6060/todo/${id}`, {id : id, data : data})
  .then((res) => res.data);
};








