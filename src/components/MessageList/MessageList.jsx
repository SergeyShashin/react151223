import './MessageList.scss';

import React, { Component } from 'react';
import { Message } from 'components/Message';

import PropTypes from 'prop-types';


export class MessageList extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let { messages } = this.props;

    return (
      <div className='messages-list'>
          {messages.map((message, idx) => <Message message={message} key={idx} />)}
      </div>
    );

  }

}