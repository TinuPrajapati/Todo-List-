import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Task({ task, updateData, deleteData }) {
  const [text, setText] = useState(task.name);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [ButtonText, setButtonText] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("bg-sky-600");
  const [status, setstatus] = useState(task.status);

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
        updateData(task._id, text, status);
      }
    }
  };

  const changeStatus = (e) => {
    setstatus(e.target.value)
    updateData(task._id, text, e.target.value);
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
      className={`${changeBackgroundColor} duration-200 w-full flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 rounded-md shadow-md backdrop-blur-sm bg-opacity-50 p-3`}
    >
      <div className="w-full sm:w-[20%] lg:w-[15%]">
        <select
          className="w-full p-2 border rounded-md outline-none bg-black text-white bg-opacity-60 backdrop-blur-md"
          onChange={changeStatus}
          value={status}
        >
          <option value="pending">Pending</option>
          <option value="start">Start</option>
          <option value="progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <input
        type="text"
        className={`w-full sm:w-3/5 p-2 border-none rounded-md outline-none ${isReadOnly ? "bg-transparent text-white" : "bg-white"
          }`}
        value={text}
        readOnly={isReadOnly}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="w-full sm:w-1/5 flex justify-evenly gap-2">
        {showButton && (
          <button
            className="p-2 bg-black text-white bg-opacity-60 backdrop-blur-md rounded-md"
            onClick={updateTask}
          >
            {ButtonText ? "Edit" : "Save"}
          </button>
        )}
        <button
          className="text-red-500 p-2 rounded-md"
          onClick={deleteTask}
        >
          <i className="ri-close-circle-line"></i>
        </button>
      </div>
    </div>

  );
}

export default Task;
