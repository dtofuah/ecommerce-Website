import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCart } from "actions/cart";


class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 cartTotal: 0,
			 items:{},
		};
	}

	_handleCartTotal() {
		const { cart } = this.props;
		let sum = 0;
		cart.forEach((item) => {
			return sum = sum + item.price;
		});
		this.setState({
			cartTotal: sum,
		});
	}
	render() {

		const { cart, cartCount } = this.props;
		let sum = 0;

		if (cartCount > 0) {
			return (
				<div className="app">
					<h1>Cart</h1>
					<ul>
						{cart.map((item) => {
							sum = sum + parseInt(item.price);
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

					<div className="sum"> Total: ${ sum }.00 </div>
					<div className="checkout-button">
						<Button onClick = {this._handleCheckout}>
							PROCEED TO CHECKOUT </Button>
						 </div>
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
function mapStateToProps(state, props) {
	console.log(state);
	const { cart, cartCount } = state.cart;
	return {
		cart,
		cartCount,
	};
}


export default connect(mapStateToProps, { addCart }) (Cart);
