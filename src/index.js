import { User } from './user.js';
import React from 'react';
import ReactDom from 'react-dom';

console.log('Hi react!');

console.log(new User('Luke', 'SkyWalker').sayHi());

let element = React.createElement(
  'h1',
  {className: 'react-hi'},
  'Привет, React работает!'
);

ReactDom.render(
  element,
  document.getElementById('root')
);
