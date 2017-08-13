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
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
