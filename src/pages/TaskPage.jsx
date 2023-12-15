import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskManagement from "../components/TaskManagement.jsx";
import logoimg from "../utils/caretogether.png";

const TaskPage = () => {
  return (
    <div className="taskContainer">
      <p>
        <b>Add Daily Tasks:</b>
      </p>
      <TaskManagement />
      <img className="taskPageLogo" src={logoimg} />
    </div>
  );
};

export default TaskPage;
