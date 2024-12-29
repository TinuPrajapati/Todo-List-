import { useState, useEffect } from "react";
import Task from "./Component/Task";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import background from "./assets/background.jpg"
import Loader from "./Component/Loader";

function App() {
  const [data, setData] = useState("");
  const [tasks, setTask] = useState([]);
  const [loading,setLoading]= useState(false)

  // Send Data
  const sendData = async () => {
    setLoading(true)
    if(data == ""){
      toast.error("Please Enter Task Name")
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_backend}/todo/new_task`,
        { name: data }
      );
      setData("");
      setTimeout(() => {
        toast.success("Your task Add successfully");
      }, 100);
      getData();
    } catch (err) {
      toast.error(err.response.data.message);
    }finally{
      setLoading(false)
    }
  };

  // update Data
  const updateData = async (id, name,status) => {
    setLoading(true)
    try {
      const response =await axios.put(
        `${import.meta.env.VITE_backend}/todo/edit_task`,
        {
          id,
          name,
          status,
        }
      );
      toast.success(response.data);
      getData();
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err)
    }finally{
      setLoading(false)
    }
  };

  // delete data
  const deleteData = async (id) => {
    setLoading(true)
    try {
      const response = await axios.delete(`${import.meta.env.VITE_backend}/todo/delete_task/${id}`);
      toast.success(response.data)
      getData();
    } catch (err) {
      toast.error(err.response.data.message);
    }finally{
      setLoading(false)
    }
  };

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${import.meta.env.VITE_backend}/todo/tasks`);
      setTask(response.data);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };

  // Get All data
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] px-10 py-5 font-Nuntio bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
      {loading && <Loader/>}
      <div id="blur" className="w-full h-full flex flex-col gap-4 items-center text-lg bg-custom3 border-2 border-custom2 rounded-md bg-opacity-10 backdrop-blur-sm py-2 ">
        <h1 className="text-3xl">Todo List</h1>
        <div className="flex bg-custom3 border-2 border-custom2 text-black w-[50%] h-14 rounded-lg justify-center px-3 py-2 gap-2">
          <input
            type="text"
            placeholder="Enter Your Task"
            className=" w-[75%] outline-none bg-custom3"
            onChange={(e) => {
              setData(e.target.value);
            }}
            value={data}
          />
          <button
            className="w-[25%] bg-sky-500 rounded-md text-white active:scale-90 py-1"
            onClick={sendData}
          >
            Add
          </button>
        </div>
        <div className="w-[80%] h-full py-2 px-8 flex flex-col gap-4 ">
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              updateData={updateData}
              deleteData={deleteData}
            />
          ))}
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
