import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { CounterContainer } from '../../containers/CounterContainer';

const props = {
  increment: () => {},
  decrement: () => {},
  incrementIfOdd: () => {},
  counter: 0
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CounterContainer {...props}/>, div);
});

it('matches snapshot', () => {
  const container = shallow(<CounterContainer {...props}/>);

  expect(container).toMatchSnapshot();
});
