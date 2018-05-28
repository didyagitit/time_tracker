import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Task from './Task';

describe('<Task />', () => {
  it('renders a <li> element with time and description', () => {
    const fakeTask = { 'time': '00:00:00', 'time_description': 'New Task' };
    
    const wrapper = shallow(<Task task={fakeTask}/>);
    const message = wrapper.find('.task');

    expect(wrapper).toHaveLength(1);
    expect(message.contains(fakeTask['time'])).toEqual(true);
    expect(message.contains(fakeTask['time_description'])).toEqual(true);
  });
});
