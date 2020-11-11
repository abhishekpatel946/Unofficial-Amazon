import React from "react";
import { useStateValue } from "../ContextProvider/StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Jupiter_GW-Editorial_1150x323_P3._CB418019451_.jpg"
          alt=""
        />
        <div>
          <h3 style={{ padding: "10px" }}>
            Hello, {user ? user.email : "Guest"}
          </h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {/* cartItem;s */}
          {cart.map((item) => (
            <CheckoutProducts
              key={item.key}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
