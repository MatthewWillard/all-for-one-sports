import React from 'react';
import ReactDOM from 'react-dom';
import NHLNews from './NHLNews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NHLNews />, div);
  ReactDOM.unmountComponentAtNode(div);
});