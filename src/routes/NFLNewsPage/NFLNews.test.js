import React from 'react';
import ReactDOM from 'react-dom';
import NFLNews from './NFLNews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NFLNews />, div);
  ReactDOM.unmountComponentAtNode(div);
});