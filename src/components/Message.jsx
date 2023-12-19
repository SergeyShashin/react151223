import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Message extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let { message} = this.props;

    return (
      <li>{message.author}: {message.text}</li>
    );

  }

}