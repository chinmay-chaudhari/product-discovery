export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const SET_SEARCH = "SET_SEARCH";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

/**
 *
 * @returns dispatcher for dispatch an action on the redux store
 */
export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return fetch(`https://demo7242716.mockable.io/products`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
}

export const addFilter = (filter, type) => ({
  type: ADD_FILTER,
  payload: { filter: filter, type: type },
});

export const removeFilter = (filter, type) => ({
  type: REMOVE_FILTER,
  payload: { filter: filter, type: type },
});

/**
 * function to update filter if the checked value is false then remove filter else add filter
 * @param {*} target
 * @returns
 */
export function updateFilters(target) {
  return (dispatch) => {
    if (target.checked === true) dispatch(addFilter(target.value, target.name));
    else dispatch(removeFilter(target.value, target.name));
  };
}

export const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: { value: value },
});

/**
 * function to update Seach Input
 * @param {*} value
 * @returns
 */
export function updateSearch(value) {
  return (dispatch) => {
    dispatch(setSearch(value));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
