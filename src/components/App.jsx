import React, { Component } from 'react';
import { Counter } from 'components/Counter';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  handleClickToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    let { isVisible } = this.state;

    return (
      <div>
        <button onClick={this.handleClickToggle}>Toggle</button>
        {isVisible && <Counter />}
      </div>
    );

  }

}