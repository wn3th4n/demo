import React from "react";

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
      <div onClick={toggleComplete}>{item.completed ? "⭕" : "✅"}</div>
      <div style={{ textDecoration: item.completed ? "line-through" : "none" }}>
        {item.task}
      </div>
      <div onClick={removeTask}>❌</div>
    </div>
  );
};

export default TodoChildView;
