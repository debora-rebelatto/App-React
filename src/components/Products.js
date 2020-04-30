import React, { Component } from 'react'
import productsData from "../vschoolProducts"

class Product extends Component {
  constructor() {
    super()
    this.state = {}
    this.prod = this.prod.bind(this)
  }

  prod(product) {
    return (
      <div>
        <h3> Name: {product.name} </h3>
        <p> Price: {product.price} </p>
        <p> Description: {product.description} </p>
      </div>
    )
  }

  render() {
    let productsArray = productsData.map(product => this.prod(product))
    return (
      <div>
        {productsArray}
      </div>
    )
  }


}

export default Product