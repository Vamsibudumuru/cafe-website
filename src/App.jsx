import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(
      cart.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <AppRoutes
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </>
  );
}

export default App;