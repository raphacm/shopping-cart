import { REMOVE_PRODUCT_FROM_CART } from "../constants/actionTypes";

export const removeProductFromCart = productId => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    productId
  }
});