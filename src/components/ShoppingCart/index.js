import React from "react";
import Tag from "../Layout/Tag";
import "./index.scss";

const ShoppingCartContainer = props => {
  return (
    <div className="shopping-cart-container">
      <h4 className="shopping-cart-container__total">100,00</h4>

      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/shopping-cart.svg)`
        }}
        className="shopping-cart"
        onClick={null}
      >
        <Tag label={1} position="bottom-right" />
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
