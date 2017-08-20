export function addCart(itemId) {
	return {
		type: "ADD_ITEM",
		itemId,

	};
}



export function cartCount(cartCount) {
	return { type: "CART_COUNT",
	 cartCount,
 	};
}


export function removeCart(itemId) {
	return {
		type: "REMOVE_ITEM",
		itemId,

	};
}
