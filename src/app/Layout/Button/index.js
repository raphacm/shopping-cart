import React from "react";
import "./index.scss";

const Button = ({children, type, onClick}) => (
  <button 
    className={`btn btn--${type}`} 
    onClick={onClick}
    >{children}</button>
);

export default Button;
