import { REMOVE_PRODUCT_FROM_CART } from "../constants/actionTypes";
import { ADD_PRODUCT_TO_CART } from "../../Product/constants/actionTypes";

const INITIAL_STATE = {
  items: {},
  subtotal: 0.0,
  quantity: 0
};

const applyAddProductsToCart = (state, action) => {
  if (state.items[action.payload.product.id]) {
    return {
      ...state,
      subtotal: state.subtotal + action.payload.product.min_price,
      quantity: state.quantity + 1,
      items: {
        ...state.items, 
        [action.payload.product.id]: {
          ...action.payload.product,
          quantity: state.items[action.payload.product.id].quantity + 1
        }
      } 
    }
  }

  return {
    ...state,
    subtotal: state.subtotal + action.payload.product.min_price,
    quantity: state.quantity + 1,
    items: {
      ...state.items, 
      [action.payload.product.id]: {
        ...action.payload.product,
        quantity: 1
      }
    } 
  }
}

export default function (state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return applyAddProductsToCart(state, action);      
    default:
      return state;
  }
}