import React, { Component } from 'react';
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
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
      </div>
    );

  }

}