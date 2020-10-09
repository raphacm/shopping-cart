import React from "react";
import Header from "../Header";
import "./index.scss";

const MainLayout = ({children}) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
