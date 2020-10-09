import React from "react";
import CartBadge from "./atoms/CartBadge";
import CartPrice from "./atoms/CartPrice";
import CartIcon from "./atoms/CartIcon";

const Cart = ({subtotal, quantity}) => {
  return (
    <div className="shopping-cart-avatar">
      {/* <CartPrice value={subtotal.toFixed(2)} /> */}
      <CartIcon>
        <CartBadge label={quantity} position="bottom-right" />
      </CartIcon>
    </div>
  );
};

export default Cart;
