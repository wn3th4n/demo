import React, { memo } from "react";

const TodoChildView = ({ item, tasks, setTask }) => {
  const toggleComplete = () => {
    setTask(
      tasks.map((task) =>
        task.id === item.id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = () => {
    setTask(tasks.filter((task) => task.id !== item.id));
  };

  return (
    <div className="item-div">
      <div onClick={toggleComplete} className="item-div--left">
        <div onClick={toggleComplete} className="item-div--left__1">
          {item.completed ? "⭕" : "✅"}
        </div>
        <div
          className="item-div--left__2"
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.task}
        </div>
      </div>
      <div className="item-div--right" onClick={removeTask}>
        ❌
      </div>
    </div>
  );
};

export default memo(TodoChildView);
