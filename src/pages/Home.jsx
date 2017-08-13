
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Home extends Component {
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
								<Link to={`description/${productId}`}>
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

export default Home;
