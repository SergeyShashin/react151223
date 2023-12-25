import React, { Component } from 'react';
import { Layout } from 'components/Layout';

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
      messages: [],
      chats: {
        '1': {
          id: 1,
          messages: [],
          name: 'Chat 1'
        },
        '2': {
          id: 2,
          messages: [],
          name: 'Chat 2'
        },
        '3': {
          id: 3,
          messages: [],
          name: 'Chat 3'
        },
      }
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
    if (messages.length) {
      let lastMessage = messages.length - 1;
      let author = messages[lastMessage].author !== 'Bot' ? messages[lastMessage].author : null;
      if (author) {
        setTimeout(() => {
          this.setState({ messages: this.state.messages.concat([{ text: `Здравствуй, ${author}!). Добро пожаловать!)`, author: 'Bot' }]) });
        }, 1000);
      }
    }

  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleMessageSend = (message) => {
    // this.setState({ messages: this.state.messages.concat([{ text: message.text, author: message.author }]) });
    if (message.text && message.author) {
      console.log(this.props);
      this.setState(({ messages }) => ({ messages: messages.concat([message]) }));
    }
  }

  render() {
    let { messages } = this.state;

    return (
      <div>
        <h2>Заголовок</h2>
        <Layout messages={messages} handleMessageSend={this.handleMessageSend} />
      </div>
    );

  }

}