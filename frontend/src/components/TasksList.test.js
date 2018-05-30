import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import TasksList from './TasksList';

describe('<TasksList />', () => {
  it('renders a collection of <Task /> components', () => {
    const task1 = { 'id': 1, 'time': '00:00:00', 'time_description': 'New Task' };
    const task2 = { 'id': 2, 'time': '00:00:01', 'time_description': 'Second Task' };
    const tasks = [task1, task2];

    const wrapper = shallow(<TasksList tasks={tasks}/>);

    expect(wrapper.find('Task')).toHaveLength(2);
  });
});
