import './ChatsList.scss';

import React, { Component } from 'react';


export class ChatsList extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className='chatsList'>
        <div>Chat1</div>
        <div>Chat2</div>

      </div >
    );

  }

}