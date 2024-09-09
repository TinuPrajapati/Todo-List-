const Task = require("../../models/task.js");
const validator = require("validator");

const updateTask = async (req,res)=>{
    const id = req.params.id;
    const {name} = req.body;

    if(!validator.isMongoId(id)) throw "enter correct id";
    
    if(!name) throw "Please enter your task";
    
    const taskValue =await Task.findByIdAndUpdate(id,{name},{new:true},{runValidators:true});
    if(!taskValue) throw "Task not found";

    res.status(200).json(taskValue)
};

module.exports = updateTask;