import React from "react";
import "./index.scss";

const Tag = ({ label, position }) => {
  return (
    <div className={`tag tag--${position.toLowerCase()}`}>
      <div className="tag__label">{label}</div>
    </div>
  );
};

export default Tag;
