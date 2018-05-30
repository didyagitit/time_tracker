import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

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
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TasksList;
