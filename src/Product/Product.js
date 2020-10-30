import React from "react";
import "./Product.css";

function Product({ id, title, img, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p> {title} </p>
        <p className="product_price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
