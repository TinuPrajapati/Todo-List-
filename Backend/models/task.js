const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your task"]
    }
    // dueDate:{
    //     type:String,
    //     required:[true,"Please enter dueDate "]
    // },
    // createAt:{
    //     type:Date,
    //     default:Date.now()
    // }
});

const Task = mongoose.model("Task",taskSchema);

module.exports =Task;