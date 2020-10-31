import React from "react";
import { useStateValue } from "../ContextProvider/StateProvider";
import "./Product.css";

function Product({ id, title, img, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the datalayer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p> {title} </p>
        <p className="product_price">
          <small>₹</small>
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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
