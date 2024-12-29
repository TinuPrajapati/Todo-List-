import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Task({ task, updateData, deleteData }) {
  const [text, setText] = useState(task.name);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [ButtonText, setButtonText] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("bg-sky-600");
  const [status,setstatus] = useState(task.status);

  // status function
  const handleStatus = () => {
    if (status === "start") {
      setChangeBackgroundColor("bg-red-400");
    } else if (status === "progress") {
      setChangeBackgroundColor("bg-yellow-400")
    } else if (status === "complete") {
      setChangeBackgroundColor("bg-green-400")
      setShowButton(!showButton)
    } else {
      setChangeBackgroundColor("bg-sky-600")
      setShowButton(true)
    }
  };

  // update function
  const updateTask = () => {
    if (text === "") {
      toast.error("Please enter your task");
      setIsReadOnly(false);
      setButtonText(false);
    } else {
      setIsReadOnly(!isReadOnly);
      setButtonText(!ButtonText);
      if (!isReadOnly) {
        updateData(task._id, text,status);
      }
    }
  };

  const changeStatus = (e) => {
    setstatus(e.target.value)
    updateData(task._id, text,e.target.value);
  }

  // Delete Function
  const deleteTask = () => {
    deleteData(task._id);
  };

  useEffect(() => {
    handleStatus();
  }, [status]);

  return (
    <div
      className={`${changeBackgroundColor} duration-200 w-full h-14 flex justify-between items-center gap-4 rounded-md shadow-xl backdrop-blur-sm bg-opacity-40 p-2`}
    >
      <div className="w-[15%] h-full flex gap-2  ">
        <select className="w-full text-sm outline-none p-2 bg-black text-white rounded-md border-2 border-custom3 bg-opacity-50 backdrop-blur-sm" onChange={changeStatus}>
          <option value="pending">Pending</option>
          <option value="start">Start</option>
          <option value="progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <input
        type="text"
        className={`w-[70%] h-full px-1 rounded-md ${!isReadOnly?"bg-white":"bg-transparent text-white"} border-none outline-none`}
        value={text}
        onChange={(e) => {
          if (!isReadOnly) {
            setText(e.target.value);
          }
        }}
        readOnly={isReadOnly}
      />
      <div className=" w-[15%] h-full flex justify-evenly items-center gap-4">
        {showButton && (
          <button
            className="py-1 px-4 bg-black text-white rounded-md border-2 border-custom3 bg-opacity-50 backdrop-blur-sm active:scale-90"
            onClick={updateTask}
          >
            {ButtonText ? "Edit" : "Save"}
          </button>
        )}
        <button
          className="text-red-500 py-1 px-2 rounded-sm active:scale-90"
          onClick={deleteTask}
        >
          <i class="ri-close-circle-line"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
