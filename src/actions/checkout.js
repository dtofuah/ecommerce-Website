import API from "util/api";

 export function submitOrder(order, cartItemIds) {
	return (dispatch, getStore) => {

		const { cart } = getStore().cart;
		const productIds  =	cart.map(function(item) {
			return item.id;
		});
		dispatch({
			type: "SUBMIT_ORDER_START",
		});
		console.log("submitOrder(order, cart)", order.zip, productIds);
		API.post('/orders', {
			args: {
				firstname: order.firstname,
				lastname: order.lastname,
				address: order.address,
				city: order.city,
				apt: order.apt,
				state: order.state,
				zip: order.zipCode,
				products: productIds,
			},
		})
			.then((res) => {
				if (res.data) {
					console.log("submitOrder(success)",res);
					dispatch({
						type: "SUBMIT_ORDER_SUCCESS",
						data: res.data,
						order,
					});
				}
				else {
					console.log("submitOrder(error)",res);

					dispatch({
						type: "SUBMIT_ORDER_FAILURE",
						error: res.error,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: "SUBMIT_ORDER_FAILURE",
					error: "Something went wrong, please refresh",
				});
			});
	};
}
