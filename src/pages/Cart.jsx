import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// cartTotal: 0,
		};
	}
	render() {
		const { cart, cartCount } = this.props;
		if (cartCount > 0) {
			return (
				<div className="app">
					<h1>Cart</h1>
					<ul>
						{cart.map((item) => {
							return (
								<div className="items-container">
									<img src={item.images[0].small} />
									<h1>{item.name}</h1>
									<h3>{item.price}</h3>

								</div>
							);
						})}
					</ul>
					<div className="cart-count">{ cartCount } items in your Cart</div>
				</div>
			);
		}
		else {
			return (
				<div className="empty-cart">
					<h1>Your cart is empty</h1>
				</div>
			);
		}
	}
}
export default Cart;
