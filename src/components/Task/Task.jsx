import React from 'react'
import './task.css';
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';

const Task = ({content,i,removeContent}) => {
  const [done, setDone] = useState(false)
  const handleCheck = () => {
    setDone((prev) => !prev)
  }
  return (
    <div className={`task ${done && 'done'}`}>
      <label for={content}>
      <input id={content} type="checkbox" name="task" onChange={handleCheck}/> {content}</label>
      <FaWindowClose style={{color:'red'}} onClick={() => removeContent(i)}/>
    </div>
  )
}

export default Task