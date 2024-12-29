const Task = require("../models/task.js");

const updateTask = async (req, res) => {
  try {
    const { name, id, status } = req.body;
    console.log(id,status)
    await Task.findByIdAndUpdate(
      id,
      { name, status },
      { new: true}
    );
    res.status(200).json("Task Update Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTask;
