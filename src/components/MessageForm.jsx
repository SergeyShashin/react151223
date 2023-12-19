import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    }

  }

  static propTypes = {
    sendMessage: PropTypes.func,
  }


  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSend = () => {
    let { sendMessage } = this.props;

    if (typeof sendMessage === 'function') {
      sendMessage({ author: this.state.author, text: this.state.text });
      this.setState({
        author: '',
        text: ''
      });
    }
  }


  render() {
    let { author, text } = this.state;

    return (
      <div>
        <p>
          <label>Автор</label><br />
          <input id="author" name="author" type="text" value={author} onChange={this.handleInputChange} />
        </p>
        <p>
          <label>Сообщение</label><br />
          <textarea id="text" name="text" cols="20" rows="5" value={text} onChange={this.handleInputChange} ></textarea>
        </p>
        <button onClick={this.handleSend}>Send</button>
      </div>
    );

  }

}