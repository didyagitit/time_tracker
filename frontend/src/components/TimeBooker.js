import React from 'react';
import { formatDate } from './../utils/utils';

class TimeBooker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: props.currentTime};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const booking = {
      time: this.state.time,
      time_description: this.state.time_description,
      finished_at: formatDate(new Date())
    };

    this.props.onBooking(booking);
  }

  render() {
    return (
      <form className="time-booker" onSubmit={this.handleSubmit}>
        <label>Time</label>
        <input
          type='text'
          value={this.state.time}
          name="time"
          onChange={this.handleChange} />

        <label>Description</label>
        <input
          type='text'
          name="time_description"
          onChange={this.handleChange}/>

        <button id='submit-time' onClick={this.handleSubmit}>Save</button>
      </form>
    );
  }
}

export default TimeBooker;
