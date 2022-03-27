const HIGH_TO_LOW = "HIGH_TO_LOW";
const LOW_TO_HIGH = "LOW_TO_HIGH";
const PRICE_RANGE_FILTER = "PRICE_RANGE_FILTER";
const CLEAR_FILTERS = "CLEAR_FILTERS";
const CATEGORIES = "CATEGORIES";
const GENDERSELECT = "GENDER";
const BRANDS = "BRANDS";
const rating = ["1", "2", "3", "4"];

export function prodFilterReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case HIGH_TO_LOW:
      return { ...state, sortBy: HIGH_TO_LOW };

    case LOW_TO_HIGH:
      return { ...state, sortBy: LOW_TO_HIGH };

    case rating[3]:
      return { ...state, rating: rating[3] };

    case rating[2]:
      return { ...state, rating: rating[2] };

    case rating[1]:
      return { ...state, rating: rating[1] };

    case rating[0]:
      return { ...state, rating: rating[0] };

    case CATEGORIES:
      if (payload.isSelected) {
        return {
          ...state,
          categories: [...state.categories, payload.categoryName],
        };
      } else {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item !== payload.categoryName
          ),
        };
      }

    case BRANDS:
      if (payload.isSelected) {
        return {
          ...state,
          brands: [...state.brands, payload.brand],
        };
      } else {
        return {
          ...state,
          brands: state.brands.filter((item) => item !== payload.brand),
        };
      }

    case GENDERSELECT:
      if (payload.isSelected) {
        return {
          ...state,
          genderSelect: [...state.genderSelect, payload.gender],
        };
      } else {
        return {
          ...state,
          genderSelect: state.genderSelect.filter(
            (item) => item !== payload.gender
          ),
        };
      }

    case PRICE_RANGE_FILTER: {
      return { ...state, priceRange: payload.priceRange };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        sortBy: "",
        rating: "",
        categories: [],
        priceRange: 0,
        brands: [],
        genderSelect: [],
      };
    }

    default:
      return state;
  }
}
