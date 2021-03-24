const express = require("express");
const mongoose = require("mongoose");

const Router = express.Router();

const Task = require("../../models/Task");
const Todo = require("../../models/Todo");

// route for add task
Router.post("/", async (req, res) => {
  const newTask = new Task({
    name: req.body.name,
  });

  try {
    let task = await Task.find();

    task = new Task(newTask);

    await task.save();

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in add task");
  }
});

//route for get tasks
Router.get("/task", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in get task");
  }
});

//get task by id

Router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(400).json({ msg: "server error" });
    }

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in get task");
  }
});

//route for delete task
Router.delete("/task/:id", async (req, res) => {
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
Router.put("/update/:id", async (req, res) => {
  const { name } = req.body;

  const newTask = {};
  if (name) newTask.name = name;

  try {
    let task = await Task.findById(req.body.id);

    if (task) {
      await task.updateOne(
        { name: req.body.name },
        { $set: newTask },
        { new: true }
      );

      return res.json(task);
    }

    res.json({ msg: " task not updated!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in update task");
  }
});

//get todo
Router.get("/todo/:id", async (req, res) => {
  try {
    const todos = await Todo.find().where({ id: req.params.id });

    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in get todos");
  }
});

//route for add todo
Router.post("/todo/:id", async (req, res) => {
  // if( !mongoose.Types.ObjectId.isValid(id) ) return false;
  try {
    let task = await Task.findById(req.body.id);

    const newTodo = new Todo({
      id: task._id,
      title: req.body.title,
      date: req.body.date,
    });

    const todo = await newTodo.save();

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in add todo");
  }
});

//route for delete todo
Router.delete("/todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    todo.remove();

    res.json({ msg: " task removed!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in delete todo");
  }
});

// route for update todo
Router.put("/todoupdate/:id", async (req, res) => {
  const { title } = req.body;

  const newTodo = {};
  if (title) newTodo.title = title;

  try {
    let todo = await Todo.findById(req.body.id);

    if (todo) {
      await todo.updateOne(
        { title: req.body.title },
        { $set: newTodo },
        { new: true }
      );

      return res.json(todo);
    }

    res.json({ msg: " todo not updated!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error in update task");
  }
});

module.exports = Router;
