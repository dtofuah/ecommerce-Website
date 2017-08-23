export function addCart(itemId, cartCount) {
	return (dispatch) => {
	return dispatch ({
		type: "ADD_ITEM",
		itemId,

		type: "CART_COUNT",
	 cartCount,
 });
};
}


// export function cartCount(cartCount) {
// 	return (dispatch) => {
// 	return dispatch ({
// 		type: "CART_COUNT",
// 	 cartCount,
//  });
// };
// }

export function removeCart(itemId) {
	return {
		type: "REMOVE_ITEM",
		itemId,

	};
}
