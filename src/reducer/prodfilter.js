const HIGH_TO_LOW = "HIGH TO LOW";
const LOW_TO_HIGH = "LOW TO HIGH";
const PRICE_RANGE_FILTER = "PRICE_RANGE_FILTER";
const CLEAR_FILTERS = "CLEAR_FILTERS";

export function prodFilterReducer(state, action) {
	const { payload } = action;
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

		case "CATEGORIES":
			if(payload.isSelected){
				return{
					...state,
					categories:[...state.categories,payload.categoryName]
				}
			}
			else{
				return{
					...state,
					categories:state.categories.filter(item=> item !== payload.categoryName),
				}
			}

		case "BRANDS":
			if (payload.isSelected) {
				return {
					...state,
					brands: [...state.brands,payload.brand]
				}
			}
			else {
				return {
					...state,
					brands: state.brands.filter(item=> item !== payload.brand),
				}
			}
		
		case "GENDER": 
			if (payload.isSelected) {
				return {
					...state,
					genderSelect: [...state.genderSelect,payload.gender]
				}
			}
			else {
				return {
					...state,
					genderSelect: state.genderSelect.filter(item=> item !== payload.gender),
				}
			}

		case PRICE_RANGE_FILTER: {
			return {...state, priceRange: payload.priceRange} 
		}
	
		case CLEAR_FILTERS: {
			return {
				...state,  
				sortBy: "",
				rating: '',
				categories: [],
				priceRange: 0,
				brands: [],
				genderSelect: [],
			}
		}

      	default:
        	return state;
    }
  }