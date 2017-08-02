import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/about",
			text: "About",
		}, {
			to: "/mystery",
			text: "Mystery page",
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
			</nav>
		);
	}
}

export default Navigation;
