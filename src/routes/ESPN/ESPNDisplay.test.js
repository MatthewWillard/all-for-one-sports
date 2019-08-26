import React from 'react';
import ReactDOM from 'react-dom';
import ESPN from './ESPN';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ESPN />, div);
  ReactDOM.unmountComponentAtNode(div);
});