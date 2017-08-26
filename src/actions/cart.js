export function addCart(product, cartCount) {
	return (dispatch) => {
	return dispatch ({
		type: "ADD_ITEM",
		product,

		type: "CART_COUNT",
	 cartCount,
 });
};
}
