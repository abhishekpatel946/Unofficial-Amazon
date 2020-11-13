import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Auth/Login";
import { auth } from "./Firebase/firebase";
import { useStateValue } from "./ContextProvider/StateProvider";
import Payment from "./Payments/Payment";
import HeaderOpt from "./Header/HeaderOpt";
import Footer from "./Footer/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// public stripe key
const promise = loadStripe(
  "pk_live_51HYm1GKmCNse0NhO4bcncB5mTLhv3hGbJTfqstWkkXTExCqES8DeAnSdsveQlL2hbAk1zuzSINiM7IvrJamGGv1Z00WCMGK5Q2"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged-in | the user was logged-in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged-out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <HeaderOpt />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <HeaderOpt />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
