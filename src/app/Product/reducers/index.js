import { FETCH_PRODUCTS } from "../constants/actionTypes";
import productList from "../../../products.json"

const INITIAL_STATE = {
  products: []
};

const applyProducts = state => {
  return {
    ...state,
    products: productList 
  }
}

export default function (state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return applyProducts(state);      
    default:
      return state;
  }
}