import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART } from "../constants/actionTypes";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const addProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product
  }
});