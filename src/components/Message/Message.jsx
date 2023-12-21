import './Message.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';




export class Message extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    let { message } = this.props;

    // function getPositionMessage() {
    //   return message.author === 'Bot' ? 'end' : 'start'
    // }


    // return (
    //   <div className='message' style={{ alignSelf: `flex-${getPositionMessage()}` }}>
    //     <div>{message.text}</div>
    //     <div className="sender">{message.author}</div>
    //   </div>
    // );

    let classes = classNames('message', {
      'message-owner': message.author !== 'Bot',
      'message-companion': message.author === 'Bot'
    }
    )

    return (
      <div className={classes} >
        <div>{message.text}</div>
        <div className="sender">{message.author}</div>
      </div >
    );

  }

}