const INITIAL_STATE = {
	products: [],
	activeProduct: null,
	error: null,
};


function productsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "GET_ALL_PRODUCTS":
		return {
        	...state,
      	products: action.products,
    			};
	case "GET_ONE_PRODUCT":
      	return {
			...state,
			 activeProduct: action.product,
		};
	default:
		return state;
	}
}


export default productsReducer;
