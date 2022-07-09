import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import '../stylesheets/TaskForm.css';

function TaskForm(props ) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  }
   
  const manageSend = e => {
    e.preventDefault();
    const newTask = {
      id : uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
  }

  return (
    <form className='container-taskform' onSubmit={manageSend}>
      <input className='input-taskform' onChange={manageChange}/>
      <button className='button-taskform'>Add Task</button>
    </form>
  )
}

export default TaskForm;