import React from 'react'
import Task from '../components/Task/Task'
import './ex2.css'
import { useState } from 'react';


const Ex2 = () => {
  const [tasks, setTasks] = useState([])
  function removeContent (i) {
    let clone = [...tasks]
    clone.splice(i, 1)
    setTasks(clone);
  }
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '')  {
      alert('You added an empty task!');
      return;
    }
    setTasks([...tasks,input]);
    setInput('');
    console.log(tasks);
  }
  

  return (
    <div style={{fontFamily: 'cursive'}}>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Add a task...'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            />
            <button>Add</button>
        </form>
        <div className='box'>
          {tasks.map((task,index) => (
              <Task key={index} content={task} i={index} removeContent={removeContent}/>
          ))}
        </div>
    </div>
  )
}

export default Ex2