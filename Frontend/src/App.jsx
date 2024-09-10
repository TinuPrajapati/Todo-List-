import { useState,useEffect } from "react";
import Task from "./Task";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [tasks,setTask] = useState([]);

  // Send Data
  const sendData = async()=>{
    try{
      await axios.post("https://todo-list-560.vercel.app/new",{name:data})
      setData("")
      setTimeout(()=>{
        alert("Your task Add successfully");
      },100)
    }
    catch(err){
      alert(err.response.data.message);
    }
  }

  // update Data
  const updateData = async(id,name)=>{
    // console.log(id,name)
    try{
      await axios.put(`https://todo-list-560.vercel.app/edit/${id}`,{
        name
      })
    }catch(err){
      alert(err.response.data.message);
    }
  }

  // delete data
  const deleteData = async(id)=>{
    try{
      await axios.delete(`https://todo-list-560.vercel.app/todo/${id}`)
    }catch(err){
      alert(err.response.data.message);
    }
  }

  // Get All data
  useEffect(()=>{
    try{
      const getData = async ()=>{
        const response = await axios.get('https://todo-list-560.vercel.app/todo');
        setTask(response.data);
      }
      getData()
    }catch(err){
      console.log(err);
    }
  },[sendData,updateData,deleteData])

  return (
    <>
      <div className="w-full h-full  flex flex-col gap-4 items-center px-8 py-5 text-2xl text-white font-serif">
        <h1 className="text-3xl">Todo List</h1>
        <div className="flex bg-white text-black w-[40%] h-14 rounded-2xl justify-center px-3 py-2 gap-2">
          <input
            type="text"
            placeholder="Enter Your Task"
            className=" w-[75%] outline-none"
            onChange={(e)=>{
              setData(e.target.value)
            }}
            value={data}
          />
          <button className="w-[25%] bg-sky-500 rounded-xl text-white active:scale-90 py-1"
          onClick={sendData}
          >
            Add
          </button>
        </div>
        <div className="w-[80%] h-full py-2 px-8 flex flex-col gap-4 ">
          {tasks.map((task)=>(
            <Task key={task._id} task={task} updateData={updateData} deleteData={deleteData}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
