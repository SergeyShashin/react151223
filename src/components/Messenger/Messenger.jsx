import React, { Component } from 'react';
import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

// const messages = [
//   { text: 'Привет, друг!', author: 'Дмитрий' },
//   { text: 'Как твои дела?', author: 'Дмитрий' },
//   { text: 'Как настроение?', author: 'Дмитрий' },
//   { text: 'Как погода?', author: 'Дмитрий' },
// ];

export class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    // this.interval = null;
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     let randIdx = Math.floor(Math.random() * messages.length);
  //     this.setState({ messages: this.state.messages.concat([{ text: messages[randIdx].text, author: messages[randIdx].author }]) });
  //   }, 3000);
  // }

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

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleMessageSend = (message) => {
    // this.setState({ messages: this.state.messages.concat([{ text: message.text, author: message.author }]) });
    this.setState(({ messages }) => ({ messages: messages.concat([message]) }));
  }

  render() {
    let { messages } = this.state;

    return (
      <div>
        <MessageForm sendMessage={this.handleMessageSend} />
        <MessageList messages={messages} />
      </div>
    );

  }

}