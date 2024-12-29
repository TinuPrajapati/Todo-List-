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
    <div className="w-[100vw] h-[100vh] font-Nuntio bg-cover bg-center overflow-hidden p-2 sm:px-10 sm:py-5" style={{ backgroundImage: `url(${background})` }}>
      {loading && <Loader/>}
      <div id="blur" className="w-full h-full flex flex-col gap-2 items-center  bg-custom3 border-2 border-custom2 rounded-md bg-opacity-10 backdrop-blur-sm py-1 text-sm sm:py-2 sm:gap-4 sm:text-lg">
        <h1 className="text-xl sm:text-3xl">Todo List</h1>
        <div className="flex bg-custom3 border-2 border-custom2 text-black rounded-lg justify-center gap-2 w-[80%] h-10 p-1 sm:px-3 sm:py-2 sm:h-14 sm:w-[50%]">
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
            className="w-[25%] bg-sky-500 rounded-md text-white active:scale-90"
            onClick={sendData}
          >
            Add
          </button>
        </div>
        <div className="h-full flex flex-col gap-2 w-full sm:w-[80%] py-1 px-2 sm:gap-4 sm:py-2 sm:px-8 ">
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
