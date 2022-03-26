const HIGH_TO_LOW = "HIGH TO LOW";
const LOW_TO_HIGH = "LOW TO HIGH";
const PRICE_RANGE_FILTER = "PRICE_RANGE_FILTER";

export function prodFilterReducer(state, action) {
	const {priceRange} = action.payload ? action.payload : null;
    switch (action.type) {
    	case HIGH_TO_LOW:
        	return { ...state, sortBy: HIGH_TO_LOW}
  
      	case LOW_TO_HIGH:
        	return { ...state,  sortBy: LOW_TO_HIGH}

      	case '4':
			return {...state, rating: '4'}

		case '3':
			return {...state, rating: '3'}

		case '2':
			return {...state, rating: '2'}

		case '1':
			return {...state, rating: '1'}

		case PRICE_RANGE_FILTER:
			return {...state, priceRange: priceRange}
  
      	default:
        	return state;
    }
  }