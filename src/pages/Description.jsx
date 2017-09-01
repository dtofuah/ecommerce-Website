
import React, { Component } from "react";
import "./Description.scss";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getOne } from "actions/product";
import { addCart } from "actions/cart";

class Description extends Component {
	componentDidMount() {
		this.props.getOne(this.props.productId);
		 }

	_handleAddCart = (event) => {
		this.props.addCart(this.props.product.id);
	}


	render() {
		const { product } = this.props;
		console.log(product);

		if (!product) {
			return (<p>Is loading.....</p>);
		}
		else {
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
						 	<Button value={product.id} onClick={this._handleAddCart}>
						 		ADD TO CART </Button>
						 	</div>
				 		</div>


			);
		 }
	 }
}

function mapStateToProps(state, props) {
	console.log(state);
	const { activeProduct } = state.product;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		cart: state.cart,
		cartCount: state.cartCount,
	};
}

const mapDispatchToProps = dispatch =>({
  addCart: (id)=> dispatch({type: 'ADD_ITEM', itemId: id}),
	getOne: (id) => {
		const products = PRODUCTS;
		const foundProduct = products.find((product) => product.id === id);
		return dispatch({
			type: "GET_ONE_PRODUCT",
			product: foundProduct,
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps) (Description);
