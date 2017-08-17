function removeCart(itemId) {
	return {
		type: "REMOVE_ITEM",
		itemId,

	};
}


function itemCount() {
	return { type: "ITEM_COUNT" };
}
