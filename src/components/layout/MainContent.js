import React from 'react';

// Components
import Jokes from '../Jokes';
import Products from '../Product';

// Hard Coded Data
import productsData from "../../vschoolProducts"
import jokesData from '../../jokesData';

function MainContent() {
  let JokeComponent = jokesData.map(joke => <Jokes key={joke.id} joke={joke} />)
  let productsArray = productsData.map(product => <Products key={product.id} content={product} />)

  return (
    <div>
      <h1> My new App </h1>
      <h1>Hello a third time!</h1>
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
      </ul>
      <main>
        {JokeComponent}
        {productsArray} 
      </main>
    </div>
  )
}

export default MainContent;