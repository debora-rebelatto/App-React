import React from 'react'

function Product(params) {
	return (
		<div>
			<h3> Name: {params.content.name} </h3>
			<p> Price: {params.content.price} </p>
			<p> Description: {params.content.description} </p>
		</div>
	)
}

export default Product