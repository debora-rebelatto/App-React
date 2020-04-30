import React, { Component } from 'react';

import jokesData from '../jokesData';

export default class Jokes extends Component {
  constructor() {
    super();
    this.state = {};
    this.jokes = this.jokes.bind(this);
  }

  jokes(joke) {
    return (
      <div>
        <p>{joke.question}</p>
        <p>{joke.punchline}</p>
      </div>
    )
  }

  render() {
    let JokeComponent = jokesData.map(joke => this.jokes(joke))
    return (
      <div>
        {JokeComponent}
      </div>
    )
  }
}
