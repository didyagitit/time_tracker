import React from 'react';
import Task from './Task';

const TasksList = ({tasks}) => {
  return (
    <ul className="tasks-list">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (<Task task={task} key={task.id} />);
        })) : (
          <p>No tasks available!</p>
        )
      }
    </ul>
  );
}

export default TasksList;
