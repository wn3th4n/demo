import React, { useState } from "react";

const DivTaskView = ({data, setData})=> {
  const [newTaskText, setNewTaskText] = useState('');


  var handleAddTask = () => {
    if(newTaskText.trim()){
      let nt = {
        id: Date.now(),
        task: newTaskText,
        completed: false
      };
      setData([...data, nt]);
      setNewTaskText('');
    }
  }



  return (
    <div className="task-container">
      {/* input */}
      <div className='task-div'>
        <div className='label'>➕add a task</div>
        <input className='inp-text' tabIndex={0}
        type='text' placeholder='Enter your task'
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}/>
        <div className='btn' onClick={handleAddTask}>➡️</div>
      </div>
    </div>
  );
}
export default DivTaskView;
