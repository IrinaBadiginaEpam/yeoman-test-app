import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { default as Counter } from '../../components/Counter';

describe('Counter Component', function () {
  let props;

  beforeEach(function () {
    props = {
      increment: jest.fn(),
      decrement: () => {},
      incrementIfOdd: () => {},
      counter: 0
    };
  });

  describe('rendering', function () {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Counter {...props}/>, div);
    });

    it('matches snapshot', () => {
      const container = shallow(<Counter {...props} />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('increment method', function () {
    it('should call proper method on click', () => {
      const wrapper = mount(<Counter {...props} />);
      wrapper.find('button.increment').simulate('click');
      expect(props.increment.mock.calls.length).toBe(1);
    });
  });
});
