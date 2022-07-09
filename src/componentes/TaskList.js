import React, {useState} from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskList.css';

const TaskList = () => {

  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const stateTasks = [task, ...tasks]
      setTask(stateTasks);
    }
  }

  const completeTask = (id) => {
    const updateTask = tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(updateTask);
  };

  const removeTask = (id) => {
    const updateTask = tasks.filter( (task) => task.id !== id );
    setTask(updateTask);
  }

  return (
      <>
        <TaskForm 
          onSubmit={addTask}
        />
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text = {task.text}
              completed={task.completed}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          )
        }
      </>
  )
}

export default TaskList;