import API from "util/api";

// import PRODUCTS from "json/products.json";
//
// export function getAll() {
// 	return {
// 		type: "GET_ALL_PRODUCTS",
// 		products: PRODUCTS,
// 	};
// }
//
//
// export function getOne(productId) {
// 	const products = PRODUCTS;
// 	return (dispatch) => {
// 		const foundProduct = products.find((product) => product.id === productId);
// 		return dispatch({
// 			type: "GET_ONE_PRODUCT",
// 			product: foundProduct,
// 		});
// 	};
// }




export function getAll() {

	return (dispatch) => {
		dispatch({ type: "PRODUCTS_LOADING"});


		API.get("/products", {
			args: {

			},
		}).then((res) => {
			if (res.data) {
				console.log("actions/products; getAll()   res.data: ", res.data);
				dispatch({
					type: "PRODUCTS_GET_ALL",
					products: res.data.products,
				});
			}
			else {
				dispatch({
					type: "PRODUCTS_FAILURE",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "PRODUCTS_FAILURE",
				error: "Something went wrong",
			});
		});

	};
}

export function getOne(productId) {
	return (dispatch) => {
		dispatch({ type: "PRODUCTS_LOADING"});

		API.get(`/products/${productId}`, {
			args: {
				query: productId,
			},
		}).then((res) => {
			if (res.data) {
				console.log("actions/products; getOne(),  res.data.product: ",res.data.product);
				dispatch({
					type: "PRODUCT_GET_ONE",
					activeProduct: res.data.product,
				});
			} else {
				console.log(res.error);
				dispatch({
					type: "PRODUCTS_FAILURE",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "PRODUCTS_FAILURE",
				error: "Something went wrong",
			});
		});
	};
}
