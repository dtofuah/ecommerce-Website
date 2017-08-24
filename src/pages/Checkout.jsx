import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";



class Checkout extends Component {

	render() {

		const { cart, cartCount } = this.props;
			return (
				<div>
				<div className="app">
					<h1>Shiping Information</h1><br/>

					{/* <ul>
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
					<div className="cart-count">{ cartCount } items to checkout</div>

					{/* <div className="sum"> Total: ${ sum }.00 </div> */} */}

					<div className="checkout-form">
						<form>
							First Name: <input type= "text" placeholder="First name"/>
							Last Name<input type= "text" placeholder="Last Name"/>
							Street: <input type= "text" placeholder="Street"/>
							Apartment: <input type= "text" placeholder="Apt"/>
							City: <input type= "text" placeholder="City"/>
							State:	<select name="state" id="state">
										  <option value="" selected="selected">Select a State</option>
										  <option value="AL">Alabama</option>
										  <option value="AK">Alaska</option>
										  <option value="AZ">Arizona</option>
										  <option value="AR">Arkansas</option>
										  <option value="CA">California</option>
										  <option value="CO">Colorado</option>
										  <option value="CT">Connecticut</option>
										  <option value="DE">Delaware</option>
										  <option value="DC">District Of Columbia</option>
										  <option value="FL">Florida</option>
										  <option value="GA">Georgia</option>
										  <option value="HI">Hawaii</option>
										  <option value="ID">Idaho</option>
										  <option value="IL">Illinois</option>
										  <option value="IN">Indiana</option>
										  <option value="IA">Iowa</option>
										  <option value="KS">Kansas</option>
										  <option value="KY">Kentucky</option>
										  <option value="LA">Louisiana</option>
										  <option value="ME">Maine</option>
										  <option value="MD">Maryland</option>
										  <option value="MA">Massachusetts</option>
										  <option value="MI">Michigan</option>
										  <option value="MN">Minnesota</option>
										  <option value="MS">Mississippi</option>
										  <option value="MO">Missouri</option>
										  <option value="MT">Montana</option>
										  <option value="NE">Nebraska</option>
										  <option value="NV">Nevada</option>
										  <option value="NH">New Hampshire</option>
										  <option value="NJ">New Jersey</option>
										  <option value="NM">New Mexico</option>
										  <option value="NY">New York</option>
										  <option value="NC">North Carolina</option>
										  <option value="ND">North Dakota</option>
										  <option value="OH">Ohio</option>
										  <option value="OK">Oklahoma</option>
										  <option value="OR">Oregon</option>
										  <option value="PA">Pennsylvania</option>
										  <option value="RI">Rhode Island</option>
										  <option value="SC">South Carolina</option>
										  <option value="SD">South Dakota</option>
										  <option value="TN">Tennessee</option>
										  <option value="TX">Texas</option>
										  <option value="UT">Utah</option>
										  <option value="VT">Vermont</option>
										  <option value="VA">Virginia</option>
										  <option value="WA">Washington</option>
										  <option value="WV">West Virginia</option>
										  <option value="WI">Wisconsin</option>
										  <option value="WY">Wyoming</option>
										</select>
							Zip Code: <input type="number" placeholder="Zip" />
						</form>
					</div>
					<div className="checkout-button">
						<Button onClick = {this._handleForm}>
							COMPLETE CHECKOUT </Button>
					</div>
				</div>
				</div>
			);
		}
	}

	function mapStateToProps(state, props) {
		console.log(state);
		return {
			cart:state.cart.cart,
			cartCount: state.cart.cartCount,
		};
	}
export default connect(mapStateToProps)(Checkout);
