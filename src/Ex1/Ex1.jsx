import React from 'react'
import { useState } from 'react';
import './ex1.css';

const Ex1 = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(prev => prev + ' ' + input);
    setInput('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Type...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button>Add</button>
      </form>
      <div className='monitor'><code>{output}</code></div>
      <button onClick={() => setOutput('')}>Clear</button>
    </div>
  )
}

export default Ex1