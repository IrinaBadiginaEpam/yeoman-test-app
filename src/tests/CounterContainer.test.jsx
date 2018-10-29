import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContainer } from '../containers/CounterContainer';

it('renders without crashing', () => {
  const div = document.createElement('div'),
  props = {
    increment: () => {},
    decrement: () => {},
    incrementIfOdd: () => {},
    counter: 0
  };
  ReactDOM.render(<CounterContainer {...props}/>, div);
});
