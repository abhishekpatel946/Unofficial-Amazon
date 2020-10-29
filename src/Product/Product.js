import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The amazon product</p>
        <p className="product_price">
          <small>$</small>
          <strong>299.49</strong>
        </p>
        <div className="product_ratings">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_CEPC_ph3._CB418076693_.jpg"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
