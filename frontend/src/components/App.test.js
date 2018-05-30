import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({adapter: new Adapter()});

import App from './App';
import TimeBooker from './TimeBooker';
import TasksList from './TasksList';
import TasksSearch from './TasksSearch';
import * as settings from './../default_settings/default_settings';

var mock = new MockAdapter(axios);

mock.onGet(`${settings.API_HOST}/api/v1/tasks.json`).reply(200, {
  tasks: [
    { id: 1, time: '00:10:20', time_description: 'First Task', finished_at: '23/05/2018' },
    { id: 2, time: '00:11:23', time_description: 'Second Task', finished_at: '25/05/2018' }
  ],
  count: 2
});

mock.onPost(`${settings.API_HOST}/api/v1/tasks`).reply(201, {
  task: { id: 3, time: '00:10:21', time_description: 'Third Task', finished_at: '26/05/2018' },
  count: 3
});

describe('<App />', () => {
  it('has one instance of TasksSearch', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(TasksSearch)).toHaveLength(1);
  });

  it('has one instance of TasksList', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(TasksList)).toHaveLength(1);
  });

  describe('when Book Time button is clicked', () => {
    it('reveals TimeBooker component', () => {
      const wrapper = mount(<App />);
      wrapper.find('#book-time').simulate('click');

      expect(wrapper.find(TimeBooker)).toHaveLength(1);
    });
  });

  describe('when Book Time button is not clicked', () => {
    it('hides TimeBooker component', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(TimeBooker)).toHaveLength(0);
    });
  });

  it('has a start button', () => {
    const wrapper = shallow(<App />);
    const submitButton = wrapper.find('#start-button');

    expect(submitButton).toHaveLength(1);
    expect(submitButton.text()).toEqual('Start');
  });

  it('has a clear button', () => {
    const wrapper = shallow(<App />);
    const submitButton = wrapper.find('#clear-button');

    expect(submitButton).toHaveLength(1);
    expect(submitButton.text()).toEqual('Clear');
  });

  it('has a book time button', () => {
    const wrapper = shallow(<App />);
    const submitButton = wrapper.find('#book-time');

    expect(submitButton).toHaveLength(1);
    expect(submitButton.text()).toEqual('Book Time');
  });
});
