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
		}, {
			to: "/cart",
			text: "Cart",
		}];

		return (
			<nav className="Nav">
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
				<span className = "nav-cartTotalItems">{this.props.cartCount}</span>
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

export default connect(mapStateToProps ) (Navigation);
