import React from "react";
import Header from "../Header";
import "./index.scss";

const withMainLayout = Component => props => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        <Component {...props} />
      </div>
    </div>
  );
};

export default withMainLayout;
