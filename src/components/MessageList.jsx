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
      <div>
        <ul>
          {messages.map((message, idx) => <Message message={message} key={idx} />)}
        </ul>
      </div>
    );

  }

}