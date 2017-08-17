function addCart(itemId) {
	return {
		type: "ADD_ITEM",
		itemId,
	};
}



function itemCount() {
	return { type: "ITEM_COUNT" };
}
