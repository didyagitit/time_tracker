import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import TasksSearch from './TasksSearch';

describe('<TasksSearch />', () => {
  it('renders a <div> element text input', () => {
    const wrapper = shallow(<TasksSearch />);

    expect(wrapper.find('.search')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
