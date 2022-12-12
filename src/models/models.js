const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName: String,
    isCompleted: Boolean,
});

const todo = mongoose.model("toDo", todoSchema);

module.exports = { todo };