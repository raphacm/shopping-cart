import React from "react";
import "./index.scss";

const withCard = Component => {
  return props => <div className="card">{<Component {...props} />}</div>;
};

export default withCard;
