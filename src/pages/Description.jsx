
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Description extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productId: props.match.params.productId,
		};

	}
	render() {
		const product = PRODUCTS[this.state.productId];
		return (
			<div className = "Description">

				  	<h1>{product.name}</h1>
				   	<p>
								Category: {product.category}
							</p>
							<p>
								Price: ${product.price}
							</p>
							<p> Discription: {product.description}</p>
							<p> Ratings: {product.rating}</p>
							<img src = {product.images[1].medium}/>
						 <img src = {product.images[0].medium}/>

						</div>
		);



						 <div className="product-add-description">
							 <Button value = {product.id} onClick = {this._handleAddCartTotal}>
								 ADD TO CART </Button>
							 </div>
				</div>
			);
		}
}

export default Description;
