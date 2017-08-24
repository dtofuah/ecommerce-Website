const INITIAL_STATE = {
	user: {},
	orderPending: false,
	isValid: false,
	orderSuccess: false,
	error: [],
};

function checkoutReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ORDER_PENDING":
			return {
				...state,
				orderPending: true,
			};

		case "ORDER_SUCCESS":
			return {
				...state,
				orderPending: false,
				orderSuccess: true,

			};

		default:
			return state;
	}
};

export default checkoutReducer;
