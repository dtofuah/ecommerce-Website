
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
				{PRODUCTS.map((product, productId) => {
           	return ([
						 <div>
				  	<h1>{product.name}</h1>
				   	<p>
								{product.category}
							</p>
							<p>
								${product.price}
							</p>
							<div>
								<Link to={`description/${product.id}`}>
								 <img src = {product.images[0].medium}/>
							 	<img src = {product.images[1].medium}/>
	  	</Link>

							</div>
						</div>
					]);
				})}

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
