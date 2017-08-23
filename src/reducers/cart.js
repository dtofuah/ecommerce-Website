

const INITIAL_STATE = {
	itemId: [],
	cartCount: 0,
	cart: [],
};

export default function addItemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_ITEM":
		console.log("IN THE GOD DAMN REDUCER");
		return {
			...state,
			itemId: [
				...state.itemId,
				{
					itemId: action.itemId,

				},

			],

			cartCount: state.cartCount + 1,
		};




	default:
		return state;
	}
}
