import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import UserDetails from "./pages/UserDetails";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import AdminOrders from "./pages/AdminOrders";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

