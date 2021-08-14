import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_FILTER,
  REMOVE_FILTER,
  SET_SEARCH,
} from "../actions/productActions";

/**
 * Initial state of application tree
 */
const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: { gender: [], categories: [], brands: [], search: "" },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    case ADD_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]:
            action.payload.type === "gender"
              ? [action.payload.filter]
              : [...state.filters[action.payload.type], action.payload.filter],
        },
      };

    case REMOVE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: state.filters[action.payload.type].filter(
            (item) => item !== action.payload.filter
          ),
        },
      };

    case SET_SEARCH:
      return {
        ...state,
        filters: { ...state.filters, search: action.payload.value },
      };

    default:
      return state;
  }
}
