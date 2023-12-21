import './Message.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Message extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let { message } = this.props;

    function getPositionMessage() {
      return message.author === 'Bot' ? 'end' : 'start'
    }


    return (
      <div className='message' style={{ alignSelf: `flex-${getPositionMessage()}` }}>
        <div>{message.text}</div>
        <div className="sender">{message.author}</div>
      </div>
    );

  }

}