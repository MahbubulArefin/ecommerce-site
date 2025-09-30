import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

import "./styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <>
      <NavBar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default App;
