import React from 'react'
import Task from '../components/Task/Task'
import './ex2.css'
import { useState } from 'react';

let tasks = [];

const Ex2 = () => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '')  {
      alert('You added an empty task!');
      return;
    }
    tasks.push(<Task content={input}/>);
    setInput('');
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
              <div key={index}>{task}</div>
          ))}
        </div>
    </div>
  )
}

export default Ex2