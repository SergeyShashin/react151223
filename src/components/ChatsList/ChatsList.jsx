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
        {/* <div>Chat1</div> */}
        {/* <div>Chat2</div> */}
        <List>
          <ListItem>
            {/* <ListItemText primmary="Chat 1"> */}
              <Link to="/chats/1">Чат1 </Link>
            {/* </ListItemText> */}
          </ListItem>

        </List>

      </div >
    );

  }

}