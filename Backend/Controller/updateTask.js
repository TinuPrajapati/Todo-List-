const Task = require("../models/task.js");

const updateTask = async (req, res) => {
  const { name, id } = req.body;
  const taskValue = await Task.findByIdAndUpdate(
    id,
    { name },
    { new: true, runValidators: true }
  );
  res.status(200).json("Task Update Successfully");
};

module.exports = updateTask;
