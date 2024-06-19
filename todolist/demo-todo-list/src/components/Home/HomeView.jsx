import "./../../css/TodoList.css";
import DivTaskView from "./../ToDoList/DivTaskView.jsx";
import React, { useEffect, useState } from "react";
import TodoChildView from "../ToDoList/TodoChildView.jsx";

function HomeView() {
  // using hook to save data
  const [tasks, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="home">
      {/* title */}
      <h1>📋 My Task!</h1>

      {/* view button input */}
      <DivTaskView data={tasks} setData={setTask} />

      {/* notify task todo */}
      <div className="task-notify">
        {tasks.length === 0 ||
        tasks.every((item) => item.completed === true) ? (
          <div>No Task Defined</div>
        ) : (
          <div>Todo</div>
        )}
      </div>

      {/* render list data */}
      <div className="task-container">
        {tasks
          .filter((item) => !item.completed)
          .reverse()
          .map((item) => (
            <TodoChildView
              key={item.id}
              item={item}
              tasks={tasks}
              setTask={setTask}
            />
          ))}
      </div>

      {/* notify task complete */}
      <div className="task-notify">
        {tasks.length === 0 ||
        tasks.every((item) => item.completed === false) ? (
          <div></div>
        ) : (
          <div>Completed</div>
        )}
      </div>

      {/* render list data */}
      <div className="task-container">
        {tasks
          .filter((item) => item.completed)
          .reverse()
          .map((item) => (
            <TodoChildView
              key={item.id}
              item={item}
              tasks={tasks}
              setTask={setTask}
            />
          ))}
      </div>
    </div>
  );
}

export default HomeView;
