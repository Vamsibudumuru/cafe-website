import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Cafe Bliss</h2>

      <p>Fresh Coffee • Great Food • Amazing Moments</p>

      <div className="social-icons">
        <FaInstagram />
        <FaFacebook />
        <FaWhatsapp />
      </div>

      <p>© 2026 Cafe Bliss</p>
    </footer>
  );
}

export default Footer;