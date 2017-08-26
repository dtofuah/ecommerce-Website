const INITIAL_STATE = {
	order: {},
	error: [],
};

function checkoutReducer(state = INITIAL_STATE, action) {
	switch (action.type) {

	case "SUBMIT_ORDER_SUCCESS":
		return {
			...state,
			order: action.order,
		};


	case "SUBMIT_ORDER_FAILURE":
		return {
			...state,
			error: action.error,
		};

	default:
		return state;
	}
}

export default checkoutReducer;
