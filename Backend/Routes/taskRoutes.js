const express = require("express");
const taskRoutes = express.Router();
const showTask = require("../Controller/showTask.js");
const createTask = require("../Controller/createTask.js");
const updateTask = require("../Controller/updateTask.js");
const deleteTask = require("../Controller/deleteTask.js");

taskRoutes.get("/",showTask);
taskRoutes.post("/new",createTask);
taskRoutes.put("/edit",updateTask);
taskRoutes.delete("/:id",deleteTask);

module.exports = taskRoutes;