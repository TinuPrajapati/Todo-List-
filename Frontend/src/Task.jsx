import React, { useState } from "react";

function Task({ task, updateData, deleteData }) {
  // check text value
  const [text, setText] = useState(task.name);

  // check input readonly or not
  const [isReadOnly, setIsReadOnly] = useState(true);

  // check changes in update btn text
  const [showUpdateButtonText, setShowUpdateButtonText] = useState(true);

  // check if checkbox is checked when updated btn not display
  const [showUpdateButton, setShowUpdateButton] = useState(true);

  // check if checkbox is checked when task bg color change
  const [changeBackgroundColor, setChangeBackgroundColor] = useState(
    "bg-gradient-to-r from-cyan-500 to-blue-500 "
  );

  // status function
  const status = (e) => {
    const statusValue = e.target.value;
    console.log(statusValue)
    if (statusValue === "Start") {
      setChangeBackgroundColor("bg-red-400");
      setShowUpdateButton(true)
    } else if (statusValue === "Progress") {
      setChangeBackgroundColor("bg-orange-400")
      setShowUpdateButton(true)
    } else if (statusValue === "Complete") {
      setChangeBackgroundColor("bg-green-400")
      setShowUpdateButton(!showUpdateButton)
    } else {
      setChangeBackgroundColor("bg-gradient-to-r from-cyan-500 to-blue-500")
      setShowUpdateButton(true)
    }
  };

  // update function
  const updateTask = () => {
    if (text === "") {
      alert("Please enter your task");
      setIsReadOnly(false);
      setShowUpdateButtonText(false);
    } else {
      setIsReadOnly(!isReadOnly);
      setShowUpdateButtonText(!showUpdateButtonText);
      if (!isReadOnly) {
        alert("Your task updated successfully");
      }
      updateData(task._id, text);
    }
  };

  // Delete Function
  const deleteTask = () => {
    deleteData(task._id);
    setTimeout(() => {
      alert("Your task deleted successfully");
    }, 100);
  };

  return (
    <div
      className={`${changeBackgroundColor} flex justify-between items-center px-3 w-full h-14 rounded-lg shadow-xl`}
    >
      {/* <input
        type="checkbox"
        onChange={(e) => {
          setChangeBackgroundColor(!changeBackgroundColor);
          setShowUpdateButton(!showUpdateButton);
        }}
      /> */}
      <div className="flex border-2 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500">
        <select name="" id="" className="text-black text-lg outline-none" onChange={status}>
          <option value="Pending">Pending</option>
          <option value="Start">Start</option>
          <option value="Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <input
        type="text"
        className="w-[50%] bg-transparent border-none outline-none"
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
            className="py-1 px-4 bg-white rounded-lg text-black active:scale-90"
            onClick={updateTask}
          >
            {showUpdateButtonText ? "Edit" : "Save"}
          </button>
        )}
        <button
          className="text-red-700 bg-white py-1 px-2 rounded-lg active:scale-90"
          onClick={deleteTask}
        >
          <i class="ri-close-circle-line"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
