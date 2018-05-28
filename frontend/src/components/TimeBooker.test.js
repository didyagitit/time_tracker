import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({adapter: new Adapter()});

import TimeBooker from './TimeBooker';

describe('<TimeBooker />', () => {
  describe('when submit button is clicked', () => {
    it('triggers handleSubmit function', () => {
      const fakeFunction = () => {};
      sinon.spy(TimeBooker.prototype, 'handleSubmit');
      const wrapper = mount(<TimeBooker currentTime='00:10:00' onBooking={fakeFunction} />);

      wrapper.find('#submit-time').simulate('click');

      expect(TimeBooker.prototype.handleSubmit.calledOnce).toBe(true);
    });
  });
});
