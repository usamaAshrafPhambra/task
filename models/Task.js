const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
  },

  
});

module.exports = Task = mongoose.model("task", taskSchema);
