import React from 'react';
import TimeBooker from './TimeBooker';
import TasksList from './TasksList';
import TasksSearch from './TasksSearch';
import axios from 'axios';
import update from 'immutability-helper';
import Pagination from 'react-js-pagination';
import { formatDigitsForDisplay } from './../utils/utils';
import * as settings from './../default_settings/default_settings';
import './../styles/App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = Object.assign(
      settings.DEFAULT_STATE,
      settings.DEFAULT_PAGINATION,
      {tasks: [], search: ''}
    );

    this.handleStartButton = this.handleStartButton.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.toggleBookTime = this.toggleBookTime.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  componentDidMount() {
    this.getTasks({params: {
      search: this.state.search,
      page: this.state.page,
      per_page: this.state.itemsCountPerPage}
    }, false);
  }

  getTasks(paramsObject, clearTimerState) {
    axios.get(`${settings.API_HOST}/api/v1/tasks.json`, paramsObject)
      .then(response => {
        const newState = {
          search: paramsObject.params.search,
          tasks: response.data.tasks,
          totalItemsCount: response.data.count,
          page: paramsObject.params.page
        };

        if (clearTimerState) {
          this.setState(
            Object.assign(settings.DEFAULT_STATE, newState)
          );
        } else {
          this.setState(newState);
        }
      }).catch(error => console.log(error));
  }

  addNewTask(newTask) {
    axios.post(`${settings.API_HOST}/api/v1/tasks`, newTask
      ).then(response => {
        const params = { params: {
            search: this.state.search,
            page: this.state.page,
            per_page: this.state.itemsCountPerPage
          }
        };

        this.getTasks(params, true);
      }).catch(error => console.log("error", error));
  }

  handleStartButton() {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => this.tick(), 1000);
      }
      return {running: !state.running};
    });
  }

  handleClearButton() {
    clearInterval(this.timer);
    this.setState(Object.assign(
      settings.DEFAULT_STATE,
      {
        search: this.state.search,
        tasks: this.state.tasks,
        totalItemsCount: state.totalItemsCount,
        page: state.page
      }
    ));
  }

  handleSearch(searchValue) {
    if (searchValue === '') {
      this.getTasks({
        params: {
          search: '',
          page: this.state.page,
          per_page: this.state.itemsCountPerPage
        }
      }, false);
    } else {
      this.getTasks({
        params: {
          search: searchValue,
          page: 1,
          per_page: this.state.itemsCountPerPage
        }
      }, false);
    }
  }

  handlePageChange(pageNumber) {
    this.getTasks({params: {
      search: this.state.search,
      page: pageNumber,
      per_page: this.state.itemsCountPerPage}
    }, false);
  }

  toggleBookTime() {
    this.setState({showBookTime: true});
  }

  tick() {
    const currentSeconds = this.state.seconds + 1;
    var seconds;
    var minutes = this.state.minutes;
    var hours = this.state.hours;

    if (currentSeconds === settings.SECONDS_LIMIT_AMOUNT) {
      seconds = 0;
      minutes = this.state.minutes + 1;
      if (minutes === settings.MINUTES_LIMIT_AMOUNT) {
        minutes = 0;
        hours = this.state.hours + 1;
      }
    } else {
      seconds = currentSeconds;
    }

    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      runTime: this.updateRunTime(hours, minutes, seconds)
    });
  }

  updateRunTime(hours, minutes, seconds) {
    const displayableSeconds = formatDigitsForDisplay(seconds);
    const displayableMinutes = formatDigitsForDisplay(minutes);
    const displayableHours = formatDigitsForDisplay(hours);

    return `${displayableHours}:${displayableMinutes}:${displayableSeconds}`;
  }

  render() {
    const {running, runTime, showBookTime, tasks, totalItemsCount} = this.state;

    return (
      <div className="container">
        <div className="run-time">
          <span>{runTime}</span>
        </div>
        <div className="controls">
          <button
            id="start-button"
            onClick={this.handleStartButton}>{running ? 'Pause' : 'Start'}</button>
          <button
            id="clear-button"
            onClick={this.handleClearButton}>Clear</button>
          <button
            id="book-time"
            onClick={this.toggleBookTime}>Book Time</button>
        </div>
        {showBookTime ? <TimeBooker currentTime={runTime} onBooking={this.addNewTask}/> : ''}
        <TasksSearch onSearch={this.handleSearch} />
        {totalItemsCount > 0 ? (
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            onChange={this.handlePageChange} />
          ) : ( '' )
        }
        <TasksList tasks={tasks} />
      </div>
    );
  }
}

export default App;
