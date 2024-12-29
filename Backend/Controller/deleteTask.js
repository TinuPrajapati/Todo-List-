const Task = require("../models/task.js");

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  res.status(200).json("update task successfully");
};

module.exports = deleteTask;