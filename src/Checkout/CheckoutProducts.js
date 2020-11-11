import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "../ContextProvider/StateProvider";

function CheckoutProducts({ key, id, img, title, rating, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_img" src={img} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
