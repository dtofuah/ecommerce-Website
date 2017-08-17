const INITIAL_STATE = {
	itemId: state.itemId,
	itemCount: state.intemCount,
};

 function removeItemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {

		case "REMOVE_ITEM":
			return {
				...state,
				itemId: [
					...state.itemId,
					{
						itemId: action.itemId,

					},
				],
			};


		case "ITEM_COUNT":
			return {
				...state,
				itemCount: state.itemCount - 1,
			};

		default:
			return state;
	}
}
