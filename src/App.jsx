import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Checkout from "pages/Checkout";
import Description from "pages/Description";
import FourOhFour from "pages/404";

class App extends React.Component {
	render() {
	state = {
		cartCount: 0,
		cart: [],
		products: PRODUCTS,
	}

	_getProduct = (productId) => {
		return this.state.products.reduce((prev, product) => {
			return product.id === productId ? product : prev;
		});
	}
	_addCartTotal = (cart) => {};
	_addCart = (productId) => {
		const { products, cart } = this.state;
		console.log(cart);
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
			cartCount: cart.length + 1,
		});
	}
	render() {
		const { products, cart, cartCount, addCartTotal } = this.state;
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />

						<Route path="/description/:productId" component={Description} />
						<Route exact path="/checkout" component={Checkout} />
						<Route path="*" component={FourOhFour} />

						<Route path="/description/:productId" render = {(props) => {
							return (
								<Description
									product = {this._getProduct(props.match.params.productId)}
									addCart = {this._addCart}
								/>
							);
						}}/>
						<Route exact path="/cart" render = {(props) => {
							return (
								<Cart {...props}
									cart={cart}
									cartCount={cartCount}
									addCartTotal={addCartTotal}
								/>
							);
						}}/>
						<Route path="*" component={404} />

					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
