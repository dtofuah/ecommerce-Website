import PRODUCTS from "json/products.json";
const INITIAL_STATE = {
	cartCount: 0,
	cart: [],
};

export default function addItemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_ITEM":
		const products = PRODUCTS;
		console.log("IN THE GOD DAMN REDUCER");
		const foundProduct = products.find((product) => product.id === action.itemId);
		let item = {
			...state,
			cart: [
				...state.cart,
					 foundProduct,
			],
			cartCount: state.cartCount + 1,
		};
		console.log("HERE'S THE MOFO STATE", item);
		return item;




	default:
		return state;
	}
}
