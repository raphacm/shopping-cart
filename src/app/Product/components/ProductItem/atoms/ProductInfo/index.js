import React, { useState, useEffect } from "react";

const ProductInfo = ({icon, content, tooltip}) => {
  const [label, setLabel] = useState("");
  
  useEffect(()=> {
    setLabel(content)
  }, [content])

  return <div className="product-info">
    <div className="product-info__box-icon">
      {icon}
    </div>
    <div className="product-info__box-info"
      onMouseOver={() => setLabel(tooltip)}
      onMouseOut={() => setLabel(content)}
    >
      <span>{label}</span>
    </div>
  </div>
  
};

export default ProductInfo;
