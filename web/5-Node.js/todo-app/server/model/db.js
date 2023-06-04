const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

const todoSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    todo: Array,
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
