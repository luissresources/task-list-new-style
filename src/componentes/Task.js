import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import '../stylesheets/Task.css';

function Task({id, text, completed, completeTask, removeTask }) {

  return (
    <div className = {completed ? 'container-task completed' : 'container-task'}>
      <div type='text' className='text-task' onClick={() => completeTask(id)} >
        {text}
      </div>
      <div className='container-icon' onClick={()=>removeTask(id)}>
        <AiFillDelete 
          className = 'icon-task'
        />
      </div>
    </div>
  )
}

export default Task;