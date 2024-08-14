import './ChatsList.scss';

import React, { Component } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export class ChatsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='chatsList'>
        <List>
          <ListItem>
            {/* <ListItemText primmary="Chat 1"> */}
            <Link to="/chats/1">Чат 1 </Link>
            {/* </ListItemText> */}
          </ListItem>
          <ListItem>
            {/* <ListItemText primmary="Chat 1"> */}
            <Link to="/chats/2">Чат 2 </Link>
            {/* </ListItemText> */}
          </ListItem>
          <ListItem>
            {/* <ListItemText primmary="Chat 1"> */}
            <Link to="/chats/3">Чат 3 </Link>
            {/* </ListItemText> */}
          </ListItem>
        </List>
      </div >
    );
  }

}