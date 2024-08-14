import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


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

  handleEnter = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleSend();
    }
  }


  render() {
    let { author, text } = this.state;

    return (
      <div>
        {/* <p>
          <label>Автор</label><br />
          <input id="author" name="author" type="text" value={author} onChange={this.handleInputChange} />
        </p> */}
        {/* <p>
          <label>Сообщение</label><br />
          <textarea id="text" name="text" cols="20" rows="5" value={text} onChange={this.handleInputChange} onKeyDown={this.handleEnter} ></textarea>
        </p> */}
        <TextField id="standard-basic"  name="author" label="Автор" variant="standard" value={author} onChange={this.handleInputChange} />
        <TextField id="standard-basic" name="text" label="Сообщение" variant="standard" value={text} onChange={this.handleInputChange} onKeyDown={this.handleEnter} />
        <Button onClick={this.handleSend} variant="text" endIcon={<SendIcon />} style={{color: 'gray', marginTop:15}}>
          Send
        </Button>
        {/* <button onClick={this.handleSend}>Send</button> */}
      </div>
    );

  }

}