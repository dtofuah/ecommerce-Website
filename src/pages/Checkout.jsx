import React, { Component } from "react";
import { Button } from "semantic-ui-react";


class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 cartTotal: sum,
			 items:{},
		};
	}

	_handleForm() {
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
			return (
				<div className="app">
					<h1>Shiping Information</h1><br>

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

					<div className="sum"> Total: ${ sum }.00 </div>

					<div className="checkout-form">
						<form>
							First Name: <input type= "text" placeholder="First name"/>
							Last Name<input type= "text" placeholder="Last Name"/>
							Street: <input type= "text" placeholder="Street"/>
							Apartment: <input type= "text" placeholder="Apt"/>
							City: <input type= "text" placeholder="City"/>
							State:	<select id="states">
									       <option value="Select State"></option>
									       <option value="NY"></option>
									       <option value="NJ"></option>
									       <option value="CT"></option>
									       <option value="CA"></option>
										</select>
							Zip Code: <input type="number" placeholder="Zip" />
						</form>
					</div>
					<div className="checkout-button">
						<Button onClick = {this._handleForm}>
							COMPLETE CHECKOUT </Button>
				</div>
			);
		}
	}
export default Checkout;
