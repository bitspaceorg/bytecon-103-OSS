"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState<Array<string>>([]);

  const handleDelete = (index: number) => {
    const newTasksArray = tasksArray.filter((task, i) => i !== index);
    setTasksArray(newTasksArray);
  };

  return (
    <div className="container mx-auto p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">To Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border-2 border-black p-2 mb-4 w-full"
      />
      <button
        type="button"
        onClick={() => {
          if (task === "") return;
          setTasksArray([...tasksArray, task]);
          setTask("");
        }}
        className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Add Task
      </button>
      <ul className="list-none">
        {tasksArray.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-2 border-black p-2 mt-2 rounded"
          >
            {task}
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white py-1 px-2 rounded cursor-pointer"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
