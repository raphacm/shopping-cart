import React from "react";
import "./index.scss";

const List = ({ items, renderComponent, verticalList }) => {
  return (
    <div className="list">
      <div
        className={`list__content ${verticalList && "list__content--inline"}`}
      >
        {items.map(renderComponent)}
      </div>
    </div>
  );
};

List.defaultProps = {
  items: [],
  renderComponent: <div></div>,
  verticalList: false
};

export default List;
