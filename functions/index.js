const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello Universe...!")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved => ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub-unit of the currency
    currency: "usd",
  });

  console.log("Payment Intent ==> ", paymentIntent);

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen cmd;s
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/unofficial-5cad3/us-central1/api
