import React, { useContext } from "react";
import "./Menu.css";
import { CartContext } from "../context/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    price: 150,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    desc: "Rich espresso with steamed milk and foam.",
  },
  {
    id: 2,
    name: "Iced Latte",
    price: 180,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    desc: "Chilled espresso with creamy milk and ice.",
  },
  {
    id: 3,
    name: "Mocha",
    price: 200,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    desc: "Chocolate-flavored coffee with milk foam.",
  },
  {
    id: 4,
    name: "Cold Brew",
    price: 170,
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800",
    desc: "Smooth and refreshing slow-brewed coffee.",
  },
  {
    id: 5,
    name: "Croissant",
    price: 90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    desc: "Buttery, flaky French pastry.",
  },
  {
    id: 6,
    name: "Blueberry Cheesecake",
    price: 220,
    image: "https://images.unsplash.com/photo-1505253216365-60b3a7427bad?w=800",
    desc: "Creamy cheesecake with blueberry topping.",
  },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p className="price">₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;



