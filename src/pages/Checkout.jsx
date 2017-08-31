import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCart } from "actions/cart";
import { submitOrder } from "actions/checkout";
import "./Checkout.scss";



class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			address: "",
			apt: "",
			city: "",
			state: "",
			zip: "",
			error: null,
		};

	}


		_handleChange = (ev) => {
			this.setState({
				[ev.target.name]: [ev.target.value].toString() });
		}

		_handleSubmit = (ev) => {
			ev.preventDefault();

			this.props.submitOrder(this.state);
			 this._handleChange(ev);
		}

	 render() {

		 const { cart, cartCount } = this.props;
		 let sum = 0;
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

	 							<lable>First Name:</lable>   <input value="" name="firstname" type= "text" onChange="_handleChange(this.value)" placeholder="First name"/><br/><br/>
	 							<lable>Last Name:</lable>    <input value="" name="lastname" type= "text" onChange="_handleChange(this.value)" placeholder="Last Name"/><br/><br/>
	 							<lable>Street:</lable>       <input value="" name="street" type= "text" onChange="_handleChange(this.value)" placeholder="Street"/><br/><br/>
	 							<lable>Apartment:</lable>    <input value="" name="apt" type= "text" onChange="_handleChange(this.value)" placeholder="Apt"/><br/><br/>
	 							<lable>City: </lable>        <input value="" name="city" type= "text" onChange="_handleChange(this.value)" placeholder="City"/><br/><br/>
	 							<lable>State:</lable>	      <select value="" name="state" id="state" onChange="_handleChange(this.value)" >
	 										  <option value="defaultValue" selected="selected">Select a State</option>
	 										  <option key="Al"  value="AL">Alabama</option>
	 										  <option key="AK" value="AK">Alaska</option>
	 										  <option key="AZ" value="AZ">Arizona</option>
	 										  <option key="AR" value="AR">Arkansas</option>
	 										  <option key="CA" value="CA">California</option>
	 										  <option key="CO" value="CO">Colorado</option>
	 										  <option key="CT" value="CT">Connecticut</option>
	 										  <option key="DE" value="DE">Delaware</option>
	 										  <option key="DC" value="DC">District Of Columbia</option>
	 										  <option key="FL" value="FL">Florida</option>
	 										  <option key="GA" value="GA">Georgia</option>
	 										  <option key="HI" value="HI">Hawaii</option>
	 										  <option key="ID" value="ID">Idaho</option>
	 										  <option key="IL" value="IL">Illinois</option>
	 										  <option key="IN" value="IN">Indiana</option>
	 										  <option key="IA" value="IA">Iowa</option>
	 										  <option key="KS" value="KS">Kansas</option>
	 										  <option key="KY" value="KY">Kentucky</option>
	 										  <option key="LA" value="LA">Louisiana</option>
	 										  <option key="ME" value="ME">Maine</option>
	 										  <option key="MD" value="MD">Maryland</option>
	 										  <option key="MA" value="MA">Massachusetts</option>
	 										  <option key="MI" value="MI">Michigan</option>
	 										  <option key="MN" value="MN">Minnesota</option>
	 										  <option key="MS" value="MS">Mississippi</option>
	 										  <option key="MO" value="MO">Missouri</option>
	 										  <option key="MT" value="MT">Montana</option>
	 										  <option key="NE" value="NE">Nebraska</option>
	 										  <option key="NV" value="NV">Nevada</option>
	 										  <option key="NH" value="NH">New Hampshire</option>
	 										  <option key="NJ" value="NJ">New Jersey</option>
	 										  <option key="NM" value="NM">New Mexico</option>
	 										  <option key="NY" value="NY">New York</option>
	 										  <option key="NC" value="NC">North Carolina</option>
	 										  <option key="ND" value="ND">North Dakota</option>
	 										  <option key="OH" value="OH">Ohio</option>
	 										  <option key="OK" value="OK">Oklahoma</option>
	 										  <option key="OR" value="OR">Oregon</option>
	 										  <option key="PA" value="PA">Pennsylvania</option>
	 										  <option key="RI" value="RI">Rhode Island</option>
	 										  <option key="SC" value="SC">South Carolina</option>
	 										  <option key="SD" value="SD">South Dakota</option>
	 										  <option key="TN" value="TN">Tennessee</option>
	 										  <option key="TX" value="TX">Texas</option>
	 										  <option key="UT" value="UT">Utah</option>
	 										  <option key="VT" value="VT">Vermont</option>
	 										  <option key="VA" value="VA">Virginia</option>
	 										  <option key="WA" value="WA">Washington</option>
	 										  <option key="WV" value="WV">West Virginia</option>
	 										  <option key="WI" value="WI">Wisconsin</option>
	 										  <option key="WY" value="WY">Wyoming</option>
	 										</select><br/><br/>
	 							<lable>Zip Code:</lable>     <input value="" name="zip" type="number" onChange="_handleChange(this.value)"  placeholder="Zip" /><br/>
	 						</form>
	 					</div>

						<div className="checkout-button">
							<Button  onClick={this._handleSubmit}>
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
export default connect(mapStateToProps, { submitOrder })(Checkout);
