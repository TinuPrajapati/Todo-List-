const Task = require("../../models/task.js");
const validator = require("validator");

const deleteTask = async (req,res)=>{
    const id = req.params.id;

    if(!validator.isMongoId(id)) throw "enter correct id";
    const task = await Task.findById(id);
    if(!task) throw "Task not found";

    const tastValue =await Task.deleteOne({_id:id});

    res.status(200).json({
        status:"update task successfully",
        task:tastValue
    })
};

module.exports = deleteTask;