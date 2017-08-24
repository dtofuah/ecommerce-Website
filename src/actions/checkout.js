import API from "util/api";

export function submit(user, cart) {

	return (dispatch) => {
		dispatch({
			type: "ORDER_PENDING",
		});
		console.log("actions/checkout; submit(user, cart)", user, cart);
		API.post("/orders", {
			args: {

			},
		});
	};
}
export function success() {

	return {
		type: "",
	};
}
export function validate() {

	return {
		type: "",

	};
}
