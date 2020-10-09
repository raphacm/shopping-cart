import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const CartIcon = ({ children, onClick }) => {
  return (
    <div className="shopping-cart-avatar__icon-container" onClick={onClick}>
      <GiShoppingCart className="shopping-cart-avatar__icon" />
      {children}
    </div>
  )
}

export default CartIcon;
