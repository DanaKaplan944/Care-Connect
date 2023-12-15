import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../api/api";
import context from "../ctx/ctx";

const TaskManagement = () => {
  const navigate = useNavigate();
  const ctx = useContext(context);
  const [tasks, setTasks] = useState({ 0: "" });

  const addTaskInput = () => {
    const lastIdx = Number(Object.keys(tasks).pop());
    setTasks({ ...tasks, [lastIdx + 1]: "" });
  };

  const handleTaskChange = (data, idx) => {
    const clone = { ...tasks };
    clone[idx] = data;
    setTasks(clone);
  };

  const doSubmit = async () => {
    try {
      const res = await APIService.addTasks(
        Object.values(tasks),
        ctx?.careRecipientData?._id
      );
      ctx.setTaskData(res.tasks);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {Object.keys(tasks).map((task) => (
        <div key={task}>
          <input
            type="text"
            className="taskInput"
            placeholder="Enter task"
            value={tasks[task]}
            onChange={(e) => handleTaskChange(e.target.value, task)}
          />
        </div>
      ))}
      <button className="button" onClick={addTaskInput}>
        + Add Task
      </button>
      <button className="button" onClick={doSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TaskManagement;
