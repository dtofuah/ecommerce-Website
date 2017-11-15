import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCart } from "actions/cart";
import { Link } from "react-router-dom";
import "./Cart.scss";


class Cart extends Component {
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
					<div className="container">
					<h1>Cart</h1>
					<ul>
						{cart.map((item) => {
							sum = sum + parseInt(item.price);
							return (
								<div className="items-container">
									<div className="pic1">
									<img src={item.images[0].small} />
								</div>

								<div className="name">
									<h1>{item.name}</h1>
								</div>

									<div className="price">
									<h3>${item.price}</h3>
								</div>
								</div>

							);
						})}
					</ul>
					<div className="low">
						<div className="cart-count">{ cartCount } items in your Cart</div>
						<div className="sum"> Total: ${ sum }.00 </div>
					</div>
						<Link to='/checkout'>
					<div className="checkout-button">
							PROCEED TO CHECKOUT
						</div>
						</Link>
					</div>

						 <footer>

						 </footer>

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
	return {
		cart:state.cart.cart,
		cartCount: state.cart.cartCount,
	};
}


export default connect(mapStateToProps)(Cart);
