import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import ProductList from "./ProductList";
import "./index.scss";

const ProductContainer = ({products, onfetchProducts}) => {

  useEffect(() => {
    onfetchProducts()
  }, [onfetchProducts])

  return <ProductList products={products} />
}

const mapStateToProps = state => ({
  products: state.product.products
})

const mapDispatchToProps = {
  onfetchProducts: fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
