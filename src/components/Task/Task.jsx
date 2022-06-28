import React from 'react'
import './task.css';
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';

const Task = ({content}) => {
  const [done, setDone] = useState(false)
  const handleCheck = () => {
    setDone((prev) => !prev)
  }
  const [deleted, setDeleted] = useState(false)
  const handleDelete = () => {
    setDeleted((prev) => true)
  }
  return (
    <div className={`task ${done && 'done'} ${deleted && 'del'}`}>
      <label for={content}>
      <input id={content} type="checkbox" name="task" onChange={handleCheck}/> {content}</label>
      <FaWindowClose style={{color:'red'}} onClick={handleDelete}/>
    </div>
  )
}

export default Task