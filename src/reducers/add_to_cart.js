const INITIAL_STATE = {
	itemId: [],
	itemCount: 0,
};

 function addItemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {

		case "ADD_ITEM":
			return {
				...state,
				itemId: [
					...state.itemId,
					{
						itemId: action.item,

					},
				],
			};


		case "ITEM_COUNT":
			return {
				...state,
				itemCount: state.itemCount + 1,
			};

		default:
			return state;
	}
}
