require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task.js");
const taskRoutes = require("./Routes/taskRoutes.js");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to data base
async function main() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
  }
}

main();

app.use(cors());

app.get("/",(req,res)=>{
  res.send("hello world")
})

// Routes
app.use("/todo",taskRoutes);


// Sever listen
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});