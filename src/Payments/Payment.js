import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import CheckoutProducts from "../Checkout/CheckoutProducts";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../ContextProvider/Reducer";
import { useStateValue } from "../ContextProvider/StateProvider";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { db } from "../Firebase/firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        // stripe expects the total in a currencies sub-units
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  // TODO: error is here... client_secret is not responsed back?
  console.log("The secret is ==> ", clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stripe...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        // back to orders page (swap with order bcoz we didn't come back on payment page)
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // do all the handles on card...
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        {/* payment section - deliver address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p> {user?.email} </p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* paymetn seconti - review itmes */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_items">
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

        {/* payment seciton - payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* stripe magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScal={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Error;s */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
