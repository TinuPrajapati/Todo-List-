const Task = require("../../models/task.js");

const createTask =async (req,res)=>{
    const {name} = req.body;

    const task = new Task({
        name
    });
    await task.save();
    res.status(200).json("Task add Successfully")
};

module.exports = createTask;