import React, { Component } from 'react';
import { MessageForm } from 'components/MessageForm';

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
    this.interval = setInterval(() => {
      let randIdx = Math.floor(Math.random() * messages.length);
      this.setState({ messages: this.state.messages.concat([{ text: messages[randIdx].text, author: messages[randIdx].author }]) });
    }, 3000);
  }

  componentDidUpdate() {
    let { messages } = this.state;
    let lastMessage = messages.length - 1;
    let author = messages[lastMessage].author !== 'Bot' ? messages[lastMessage].author : null;
    if (author) {
      setTimeout(() => {
        this.setState({ messages: this.state.messages.concat([{ text: `Здравствуй, ${author}!). Добро пожаловать!)`, author: 'Bot' }]) });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState({ messages: this.state.messages.concat([{ text: message.text, author: message.author }]) });
  }

  render() {
    let { messages } = this.state;
    console.log(messages);

    return (
      <div>
        <MessageForm sendMessage={this.handleMessageSend} />
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
      </div>
    );

  }

}