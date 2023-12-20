import './Message.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Message extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let { message } = this.props;

    return (
      <div className='message'>{message.author}: {message.text}</div>
    );

  }

}