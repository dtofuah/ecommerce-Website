import "./Navigation.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addCart } from "actions/cart";
import { connect } from "react-redux";


class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/about",
			text: "About",
		}];

		return (
			<div className="w3">

				<div><li><Link to="/" className="Main">
					<h1>WATHES.com</h1>
				</Link></li></div>

				<ul className="Nav">

					<li><Link to="/cart" className="cart">
				CHART
						<span className = "nav-cartTotalItems">{this.props.cartCount}</span>
					</Link></li>

					<li><input type="text" name="search" placeholder="Search.."/></li>

					<li><Link to="/about" className="about">
				ABOUT
					</Link></li>

					<li><Link to="/" className="home">
				HOME
					</Link></li>

				</ul>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	console.log(state);
	return {
		cartCount:state.cart.cartCount,
	};
}

export default connect(mapStateToProps)(Navigation);
