import React, { Component } from 'react';
import randomColor from 'randomcolor';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ''
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const newColor = randomColor();
      this.setState({ color: newColor })
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.increment}>increment!</button>
        <button onClick={this.decrement}>decrement!</button>
      </div>
    )
  }
}

export default Counter;