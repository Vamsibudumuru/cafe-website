import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import CartPage from "../pages/CartPage";

function AppRoutes({
  addToCart,
  cart,
  removeFromCart
}) {

  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/menu"
        element={
          <Menu
            addToCart={addToCart}
          />
        }
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/cart"
        element={
          <CartPage
            cart={cart}
            removeFromCart={
              removeFromCart
            }
          />
        }
      />

    </Routes>
  );
}

export default AppRoutes;