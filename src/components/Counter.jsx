import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Counter extends Component {

  static propTypes = {
    initial: PropTypes.number
  }

  static defaultProps = {
    initial: 0
  }

  constructor(props) {
    super(props);


    this.state = {
      counter: this.props.initial
    }

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => console.log('го'), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = event => {
    let sign = event.target.dataset.sign;
    this.setState(prevState => prevState.counter += sign === '+' ? 1 : -1);
  }

  render() {

    return (
      <div>
        <button data-sign='+' onClick={this.handleClick}>+</button>
        <span>{this.state.counter}</span>
        <button data-sign='-' onClick={this.handleClick}>-</button>
      </div>
    );

  }

}