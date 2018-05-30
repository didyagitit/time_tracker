import React from 'react';
import PropTypes from 'prop-types';

class TasksSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const searchValue = e.target.value;

    this.props.onSearch(searchValue);
  }

  render() {
    return (
      <div className='search'>
        <label>Search: </label>
        <input
          name="search"
          placeholder="Type your search term"
          type="text"
          onChange={this.handleSubmit} />
      </div>
    );
  }
}

TasksSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default TasksSearch;
