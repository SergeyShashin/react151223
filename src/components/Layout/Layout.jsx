import './Layout.scss';

import React, { Component } from 'react';

import { ChatsList } from 'components/ChatsList';
import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';

export class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='layout'>
        <ChatsList />
        <section>
          <MessageList messages={this.props.messages} />
          <MessageForm sendMessage={this.props.handleMessageSend} />
        </section>
      </div >
    );

  }

}