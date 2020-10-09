import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../../actions";
import Button from "../../../Layout/Button";
import ProductPrice from "./atoms/ProductPrice"; 
import ProductTitle from "./atoms/ProductTitle"; 
import ProductImage from "./atoms/ProductImage"; 
import ProductInfo from "./atoms/ProductInfo"; 
import ProductInfoContainer from "./atoms/ProductInfoContainer"; 
import { GiTabletopPlayers, GiSandsOfTime } from 'react-icons/gi';

const ProductItem = ({ product, min_price, onAddProductToCart }) => {
  const { name, thumbnail_url, playing_time, max_players } = product;

  return (
      <div className="product">
        <ProductImage img={thumbnail_url} alt={name} />
        <ProductTitle text={name}/>
        <ProductInfoContainer>
            <ProductInfo 
              icon={<GiTabletopPlayers/>}
              content={max_players}
              tooltip="Players"
            />
            <ProductInfo 
              icon={<GiSandsOfTime/>}
              content={playing_time}
              tooltip="Time"
            />
        </ProductInfoContainer>
        <ProductPrice value={min_price} />
        <Button type="primary"
          onClick={() => onAddProductToCart({
            id: product.id,
            name, 
            thumbnail_url,
            min_price
          })}
        >Add to Cart</Button>
      </div>
  );
};

const mapDispatchToProps = {
  onAddProductToCart: addProductToCart
}

export default connect(null, mapDispatchToProps)(ProductItem);
