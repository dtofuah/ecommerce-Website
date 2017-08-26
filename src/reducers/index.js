import { combineReducers } from "redux";
import cart from "./cart";
import product from "./product";
import checkout from "./checkout";


export default combineReducers({
	cart,
	product,
	checkout,
});
