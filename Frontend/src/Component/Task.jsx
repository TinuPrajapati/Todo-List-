import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Task({ task, updateData, deleteData }) {
  const [text, setText] = useState(task.name);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [showUpdateButtonText, setShowUpdateButtonText] = useState(true);
  const [showUpdateButton, setShowUpdateButton] = useState(true);
  const [changeBackgroundColor, setChangeBackgroundColor] = useState(
    "bg-sky-600"
  );

  // status function
  const status = (e) => {
    const statusValue = e.target.value;
    console.log(statusValue)
    if (statusValue === "Start") {
      setChangeBackgroundColor("bg-red-400");
      setShowUpdateButton(true)
    } else if (statusValue === "Progress") {
      setChangeBackgroundColor("bg-yellow-400")
      setShowUpdateButton(true)
    } else if (statusValue === "Complete") {
      setChangeBackgroundColor("bg-green-400")
      setShowUpdateButton(!showUpdateButton)
    } else {
      setChangeBackgroundColor("bg-sky-600")
      setShowUpdateButton(true)
    }
  };

  // update function
  const updateTask = () => {
    if (text === "") {
      toast.error("Please enter your task");
      setIsReadOnly(false);
      setShowUpdateButtonText(false);
    } else {
      setIsReadOnly(!isReadOnly);
      setShowUpdateButtonText(!showUpdateButtonText);
      if (!isReadOnly) {
        updateData(task.id, text);
      }
    }
  };

  // Delete Function
  const deleteTask = () => {
    deleteData(task._id);
  };

  return (
    <div
      className={`${changeBackgroundColor} w-full h-14 flex justify-between items-center gap-4 rounded-md shadow-xl backdrop-blur-sm bg-opacity-40 p-2`}
    >
      <div className="w-[15%] h-full flex gap-2  ">
        <select className="w-full text-sm outline-none p-2 bg-black text-white rounded-md border-2 border-custom3 bg-opacity-50 backdrop-blur-sm" onChange={status}>
          <option value="Pending">Pending</option>
          <option value="Start">Start</option>
          <option value="Progress">In Progress</option>
          <option value="Complete">Complete</option>
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
        {showUpdateButton && (
          <button
            className="py-1 px-4 bg-black text-white rounded-md border-2 border-custom3 bg-opacity-50 backdrop-blur-sm active:scale-90"
            onClick={updateTask}
          >
            {showUpdateButtonText ? "Edit" : "Save"}
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
