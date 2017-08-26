import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCart } from "actions/cart";
import "./Checkout.scss";



class Checkout extends Component {

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

		// if (cartCount > 0) {
			return (
				<div className="checkout_page">
					<div className="checkout_header"><h1>Finishing Your Checkout</h1></div>
					<ul>
						{cart.map((item) => {
							sum = sum + parseInt(item.price);
							return (
								<div className="items-container">
									<img src={item.images[0].small} />
									<div className="item_name"><h1>{item.name}</h1></div>
									<div className="item_price"><h3>${item.price}</h3></div>

								</div>
							);
						})}
					</ul>
					<div className="sum"> Total: ${ sum }.00 </div>
					<div className="cart-count">{ cartCount } items to checkout </div>

						<div className="info"> ENTER SHIPING IINFORMATION</div>
						 <div className="checkout-form">
	 						<form>
	 							<lable>First Name:</lable>   <input type= "text" placeholder="First name"/><br/><br/>
	 							<lable>Last Name:</lable>    <input type= "text" placeholder="Last Name"/><br/><br/>
	 							<lable>Street:</lable>       <input type= "text" placeholder="Street"/><br/><br/>
	 							<lable>Apartment:</lable>    <input type= "text" placeholder="Apt"/><br/><br/>
	 							<lable>City: </lable>        <input type= "text" placeholder="City"/><br/><br/>
	 							<lable>State:</lable>	      <select name="state" id="state">
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
	 										</select><br/><br/>
	 							<lable>Zip Code:</lable>     <input type="number" placeholder="Zip" /><br/>
	 						</form>
	 					</div>
	 					<div className="checkout-button">
	 						<Button onClick = {this._handleForm}>
	 							PURCHACE </Button>
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
