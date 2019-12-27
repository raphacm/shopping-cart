import React from "react";
import withMainLayout from "./Layout/MainLayout/withMainLayout";
import List from "./Layout/List";
import ProductItem from "./Products/ProductItem";
import gameList from "../products.json";

const ListWithMainLayout = withMainLayout(List);

function App() {
  return (
    <>
      <ListWithMainLayout
        items={gameList}
        renderComponent={item => <ProductItem key={item.id} {...item} />}
      />
    </>
  );
}

export default App;
