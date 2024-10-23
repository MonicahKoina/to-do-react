import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks]=useState([]);
    const [newTask, setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(tasks => [...tasks, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) =>i !== index);
        setTasks(updatedTasks);

    }
  return (
    <div>
    <div>
        <h1>To Do List</h1>
        <div>
            <input 
            type="text"
            placeholder='Enter a task'
            value={newTask}
            onChange={handleInputChange}
             />
             <button 
             onClick={addTask}>
                Add</button>
        </div>
    </div>
    <ol>
        {tasks.map((task, index) => (
            <li key={index}>
                <span>{task}</span>
                <button
                onClick={()=>{
                    deleteTask(index)
                }}>
                    Delete
                </button>
            </li>
        ))}
    </ol>
    </div>
  )
}

export default Todo