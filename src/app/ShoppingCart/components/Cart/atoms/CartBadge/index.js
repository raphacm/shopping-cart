import React from "react";
import "./index.scss";

const CartBadge = ({ label, position }) => {
  return (
    <div className={`badge badge--${position.toLowerCase()}`}>
      <div className="badge__label">{label}</div>
    </div>
  );
};

export default CartBadge;
