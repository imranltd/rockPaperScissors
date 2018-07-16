import React from 'react';
import ReactDOM from 'react-dom';
import Application from './container';

it('renders Application without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});
