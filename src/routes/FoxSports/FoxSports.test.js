import React from 'react';
import ReactDOM from 'react-dom';
import FoxSports from './FoxSports';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoxSports />, div);
  ReactDOM.unmountComponentAtNode(div);
});