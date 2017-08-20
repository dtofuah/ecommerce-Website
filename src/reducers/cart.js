

const INITIAL_STATE = {
	itemId: [],
	cartCount: 0,
	cart: [],
};

export default function addItemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_ITEM":
		return {
			...state,
			itemId: [
				...state.itemId,
				{
					itemId: action.itemId,

				},
			],
		};


	case "CART_COUNT":
		return {
			...state,
				 cartCount: state.cartCount + 1,
		};

	default:
		return state;
	}
}
