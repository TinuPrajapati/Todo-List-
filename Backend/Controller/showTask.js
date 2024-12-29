const Task = require("../models/task.js");

const showTask=async(req,res)=>{
    const tasks = await Task.find({});
    res.status(200).json(tasks);
};

module.exports = showTask;