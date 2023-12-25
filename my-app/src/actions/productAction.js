export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const UPDATE_ACTIVE_PAGE = "UPDATE_ACTIVE_PAGE";

export const fetchProducts = (
  productList,
  totalProductCount,
  pageCount,
  fetchState
) => ({
  type: FETCH_PRODUCTS,
  payload: { productList, totalProductCount, pageCount, fetchState },
});

export const updateActivePage = (activePage) => ({
  type: UPDATE_ACTIVE_PAGE,
  payload: { activePage },
});
