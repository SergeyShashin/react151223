import React, { Component } from 'react';

const messages = [
  { text: 'Привет, друг!', author: 'Дмитрий' },
  { text: 'Как твои дела?', author: 'Дмитрий' },
  { text: 'Как настроение?', author: 'Дмитрий' },
  { text: 'Как погода?', author: 'Дмитрий' },
];

export class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    this.interval = null;
  }

  componentDidMount() {
    let lengthArrMessages = messages.length;
    this.interval = setInterval(() => {
      let randIdx = Math.floor(Math.random() * lengthArrMessages);
      this.setState({ messages: this.state.messages.concat([{ text: messages[randIdx].text, author: messages[randIdx].author }]) });
    }, 1500);
  }

  componentDidUpdate() {
    let {messages} = this.state;
    let lastMessage = messages.length - 1;
    let author = messages[lastMessage].author !== 'Bot' ? messages[lastMessage].author : null;
    console.log(author);
    if (author) {
      setTimeout(() => {
        this.setState({ messages: this.state.messages.concat([{ text: `Здравствуй, ${author}!). Добро пожаловать!)`, author: 'Bot' }]) });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}

        </ul>
      </div>
    );

  }

}