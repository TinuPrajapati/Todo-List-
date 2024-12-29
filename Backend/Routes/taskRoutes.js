const express = require("express");
const taskRoutes = express.Router();
const showTask = require("../Controller/showTask.js");
const createTask = require("../Controller/createTask.js");
const updateTask = require("../Controller/updateTask.js");
const deleteTask = require("../Controller/deleteTask.js");

taskRoutes.get("/tasks",showTask);
taskRoutes.post("/new_task",createTask);
taskRoutes.put("/edit_task",updateTask);
taskRoutes.delete("/delete_task/:id",deleteTask);

module.exports = taskRoutes;