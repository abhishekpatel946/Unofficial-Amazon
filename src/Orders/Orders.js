import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../Firebase/firebase";
import { useStateValue } from "../ContextProvider/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              // id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders();
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Order's</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
