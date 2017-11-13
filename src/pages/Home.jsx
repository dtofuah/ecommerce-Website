
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
import { getAll } from "actions/product";
import { connect } from "react-redux";
import "./Home.scss";


class Home extends Component {
	componentDidMount() {
		this.props.getAll();
		 }
	render() {
		return (

			<div className = "Home">

				<div className= "main">
					<div className= "content">
					<h1>WATCHES.COM</h1>
					<h2>Your location for the best watches......</h2>
				</div>
				</div>
				{PRODUCTS.map((product, productId) => {
           	return ([
							<div className= "product">
							<Link to={`description/${product.id}`}>
						 <div className= "product-list">

							<div className="product-pic">
								  <img src = {product.images[0].medium}/>
							</div>

							<div className= "product-name">
							 <h1>{product.name}</h1>
						 </div>

						 <div className= "product-category">
							 {product.category}
						 </div>

						 <div className= "product-price">
							 ${product.price}
						 </div>
						</div>
						</Link>
					</div>
					]);
				})}
				<footer>

				</footer>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	console.log(state);
	const { products } = state.product;
	return {
		product: products,
	};
}

export default connect(mapStateToProps, { getAll }) (Home);
