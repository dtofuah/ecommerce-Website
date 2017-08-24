import API from "util/api";

import PRODUCTS from "json/products.json";

export function getAll() {
	return {
		type: "GET_ALL_PRODUCTS",
		products: PRODUCTS,
	};
}


export function getOne(productId) {
	const products = PRODUCTS;
	return (dispatch) => {
		const foundProduct = products.find((product) => product.id === productId);
		return dispatch({
			type: "GET_ONE_PRODUCT",
			product: foundProduct,
		});
	};
}
