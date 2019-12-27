import React from "react";
import withCard from "../Layout/Card";
import "./index.scss";

const ProductItem = item => {
  console.log(item);
  const { product, min_price } = item;
  const { name, thumbnail_url, bgg_ranking, bgg_rating } = product;
  return (
    <div className="product">
      <img className="product__image" src={thumbnail_url} alt={name} />
      <h3 className="product__title">{name}</h3>
      <div className="product__info-container">
        <aside>
          <div className="product__info">
            <span>
              Price:
              <p>
                <strong> R$ {min_price}</strong>
              </p>
            </span>
          </div>
        </aside>

        <aside>
          <div className="product__info">
            <div className="product__info__box-icon">
              <img src={`${process.env.PUBLIC_URL}/star.svg`} alt="ranking" />
            </div>
            <div className="product__info__box-info">
              <span>{bgg_ranking}</span>
            </div>
          </div>

          <div className="product__info">
            <div className="product__info__box-icon">
              <img
                src={`${process.env.PUBLIC_URL}/ranking.svg`}
                alt="ranking"
              />
            </div>
            <div className="product__info__box-info">
              <span>{bgg_rating}</span>
            </div>
          </div>
        </aside>
      </div>
      <button
        className="product__button product__button--primary"
        onClick={() => null}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default withCard(ProductItem);
