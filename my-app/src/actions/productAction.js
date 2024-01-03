import axiosInstance from "../axios/axiosInstance";
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

export const fetchProductsData = (category, filter, sort) => {
  return (dispatch) => {
    let url = "/products";
    if (category) {
      url += `?category=${category}`;
    }
    if (filter) {
      url += `&filter=${filter}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }

    return axiosInstance
      .get("/products")
      .then((response) => {
        dispatch(
          fetchProducts(
            response.data.productList,
            response.data.totalProductCount,
            response.data.pageCount,
            "FETCHED"
          )
        );
      })

      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
};
