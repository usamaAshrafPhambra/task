const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "task",
  },
  title: {
    type: String,
  },
  done:{
    type : Boolean,
    default: false
  },
  date: {
    type: Date,
  },
});

module.exports = Todo = mongoose.model("todo", todoSchema);
