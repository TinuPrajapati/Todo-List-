const Task = require("../../models/task.js");

const createTask =async (req,res)=>{
    const {name} = req.body;
    console.log("line-->",req.body)
    if(!name) throw "Please enter your task";

    const task = new Task({
        name
    });
    await task.save();
    res.status(200).json(task)
};

module.exports = createTask;