import React, { useEffect, useState } from "react";
import "./AdminOrders.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>User</th>
              <th>Address</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.userName}</td>
                <td>{order.address}</td>
                <td>
                  {order.items.map((item) => (
                    <div key={item._id}>
                      {item.name} × {item.quantity} (${item.price})
                    </div>
                  ))}
                </td>
                <td>₹{order.totalAmount}</td>
                <td>{order.paymentStatus}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
