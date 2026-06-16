import { Link } from "react-router-dom";

function Navbar({ cartCount }) {

  return (
    <nav className="navbar">

      <h2>Cafe Bliss</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/menu">Menu</Link>

        <Link to="/gallery">Gallery</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          🛒 {cartCount}
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;