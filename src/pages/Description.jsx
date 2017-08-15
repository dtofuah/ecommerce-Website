
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

class Description extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	_handleAddCart = (productId) => {
		this.props.addCart(this.props.product.id);
	}
	render() {
		const { product } = this.props;
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

						 <div className="product-add-description">
						 	<Button value = {product.id} onClick = {this._handleAddCart}>
						 		ADD TO CART </Button>
						 	</div>
						</div>


		);
		}
}

export default Description;
