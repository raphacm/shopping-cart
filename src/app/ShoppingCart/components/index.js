import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { useOutsideClickAction } from "../../utils/useOutsideClickAction";
import {MdRemove} from "react-icons/md"; 
import "./index.scss";

const ShoppingCart = ({cart}) => {
  const [carDetailVisibility, setCartDetailVisibility] = useState(false)

  const wrapperRef = useRef(null);
  useOutsideClickAction(wrapperRef, () => setCartDetailVisibility(false));

  const renderProducts = () => {
    let products = [];
    for (let item in cart.items) {
      products.push(cart.items[item])
    }
    return products
  }

    return (
    <div>
      <div onClick={() => setCartDetailVisibility(!carDetailVisibility)}>
        <Cart quantity={cart.quantity} />
      </div>
        <div className={`shopping-cart-list ${carDetailVisibility ? "shopping-cart-list--visible": ""}`}>
          <div className="shopping-cart-list__content-header">
            <h2>Meu carrinho - Total: {cart.subtotal}</h2>
          </div>
          <div ref={wrapperRef} className="shopping-cart-list__content">
            <div>
              {
                renderProducts().map(product => {
                  return <div className="shopping-cart-item">
                    <img className="shopping-cart-item__image" src={product.thumbnail_url} />
                    <h3 className="shopping-cart-item__title">{product.name}</h3>
                    <h3 className="shopping-cart-item__price">{product.min_price.toFixed(2)}</h3>
                    <h3 className="shopping-cart-item__quantity">{product.quantity}</h3>
                    <button className="shopping-cart-item__btn"><MdRemove/></button>
                  </div>
                })
                
              }
            </div>
          </div>
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(ShoppingCart);
