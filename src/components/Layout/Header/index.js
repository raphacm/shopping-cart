import React from "react";
import ShoppingCart from "../../ShoppingCart";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1>My Store</h1>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
