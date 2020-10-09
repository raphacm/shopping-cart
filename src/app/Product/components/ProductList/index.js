import React from "react";
import Card from "../../../Layout/Card";
import List from "../../../Layout/List";
import ProductItem from "../ProductItem"; 

const ProductList = ({products}) => {
  return (
  <List 
    items={products}
    renderComponent={item => <Card key={item.id}><ProductItem  {...item} /></Card>}
  />
)};

export default ProductList;
