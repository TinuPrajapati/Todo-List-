const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your task"]
    },
    status:{
        type:String,
        enum:["pending","completed","progress","start"],
        default:"pending",
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports =Task;