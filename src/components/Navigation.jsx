import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
			<nav className="Nav">
				<NavLink to="/home" className="Main">
				<p><h1>WATHES</h1>.<h3>com</h3></p>
			</NavLink>
			<div className= "Nav_center">
				{links.map((link) => {
					return (
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})}
				<NavLink to="/cart" className="cart">
				Chart
				<span className = "nav-cartTotalItems">{this.props.cartCount}</span>
			</NavLink>

			</div>
			</nav>
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
