import React from 'react'
import Task from '../components/Task/Task'
import './ex2.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ex2 = () => {
  const [tasks, setTasks] = useState([])
  function removeContent (i) {
    setTasks([...tasks].filter((_,index) => index !== i))
    toast.success('Deleted')
  }
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '')  {
      toast.error('Task should not be empty!')
      return;
    }
    setTasks([...tasks,input]);
    setInput('');
  }
  

  return (
    <div style={{fontFamily: 'cursive'}}>
        <h1>Todo List</h1>

        <form onSubmit={handleSubmit} className='form'>
            <input 
              type='text'
              placeholder='Add a task...'
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className='btn btn-primary'>Add</button>
        </form>
 
        <div className='box'>
          {tasks.map((task,index) => (
              <Task key={index} content={task} i={index} removeContent={removeContent}/>
          ))}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Ex2