import { combineReducers } from "redux";
import cart from "./cart";
import product from "./product";


export default combineReducers({
	cart,
	product,
});
