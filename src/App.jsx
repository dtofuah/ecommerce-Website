import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  reduxThunk  from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import PRODUCTS from "json/products.json";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Cart from "pages/Cart";
import Description from "pages/Description";
import FourOhFour from "pages/404";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
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

	_totalCart = (cart) => {

	};

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
	};
	render() {
		const { products, cart, cartCount } = this.state;
		return (
			<BrowserRouter>
				<Provider store={store}>
		 		<div>
		 			<Navigation cartCount={ this.state.cartCount }/>
		 			<Switch>
			 			<Route exact path="/" component={Home} />
			 			<Route exact path="/about" component={About} />
			 			<Route path="/description/:productId" component={Description}/>
					 	<Route exact path="/cart" component={Cart}/>
				 		<Route path="*" component={404} />
					 </Switch>
				 </div>
				</Provider>
			</BrowserRouter>
		);
	}
}

export default App;
