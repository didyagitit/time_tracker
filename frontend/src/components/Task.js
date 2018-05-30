import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task}) => {
  return (
    <li className="task">
      <h3>Task:</h3>
      <p>{task['time_description']}</p>
      <p>Time: {task['time']}</p>
      <p>Finished at: {task['finished_at']}</p>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
