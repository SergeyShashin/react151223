// import { User } from './user.js';
import React from 'react';
// import ReactDom from 'react-dom';
import ReactDom from 'react-dom/client';
// import { App } from 'components/App';
import { Messenger } from 'components/Messenger';

// console.log('Hi react!');

// console.log(new User('Luke', 'SkyWalker').sayHi());

// let element = React.createElement(
//   'h1',
//   {className: 'react-hi'},
//   'Привет, React работает!'
// );

// let element = <h1 className='react-hi'>Привет, React JSX работает!</h1>;

// let messages = ['Привет, друг!', 'Как поживаешь?'];

// let Message = props => <h2>{props.message}</h2>;
// let MessageList = props => props.messages.map(el => <Message message={el} />);

// ReactDom.render(
// <MessageList messages={messages} />,
//   <App />,
//   document.getElementById('root')
// );

// ReactDom.createRoot(document.getElementById('root')).render(<App />);
ReactDom.createRoot(document.getElementById('root')).render(<Messenger />);
