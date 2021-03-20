const express = require("express");
const Router = express.Router();

const Task = require("../../models/Task");



// route for add task
Router.post("/", async (req, res) => {
  

  const newTask = new Task({
    name: req.body.name,
  });

  try {
    let task = await Task.find();

    task = new Task(newTask);

    //    console.log(task)

    await task.save();

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in add task");
  }
});

//route for get task
Router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in get task");
  }
});

//route for delete task
Router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    task.remove();

    res.json({ msg: " task removed!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in delete task");
  }
});

// route for update task
Router.put('/:id',
async ( req , res)=>{
   const { task } = req.body;

   const newTask = {};
   if(task) newTask.task = task;

   try {
       let task = await Task.findById(req.params.id);

       if(task){
           await task.update(
               {$set : newTask},
               {new : true}
           )
           return res.json(task);
       }

       res.json({ msg : ' task not updated!'});
   } catch (err) {
       console.error(err.message);
       res.status(500).send("server error in update task");
   }
});

  



module.exports = Router;
