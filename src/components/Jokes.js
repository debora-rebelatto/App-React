import React from 'react';

function Jokes(params) {
  return (
    <div>
      <p> {params.joke.question} </p>
      <p> {params.joke.punchLine} </p>
      <hr />
    </div>
  )
}

export default Jokes;
