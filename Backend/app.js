require("express-async-errors");
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4500;
const Task = require("./models/task.js");
const errorHandler = require("./handler/errorHandler.js");
const taskRoutes = require("./Routes/taskRoutes.js");
const cors = require("cors");

// Convert data from url
app.use(express.urlencoded({ extended: true }));

// Convert data into json format from bson format
app.use(express.json());

// Connect to data base
const dbLink = process.env.mongo_Atlas;
async function main() {
  await mongoose.connect(dbLink);
}

main()
.then((res)=>{console.log("connection is established to MongoDB")})
.catch((err) => console.log(err));

app.use(cors());

// Routes
app.use("/todo",taskRoutes);

// middleware
app.use(errorHandler);

// another request
app.use("*",(req,res)=>{
    res.status(404).json({
        status:"Not found",
        message:"404, please check url"
    })
})

// Sever listen
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});