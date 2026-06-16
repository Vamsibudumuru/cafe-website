import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Cafe Bliss</h1>

        <p>
          Where Every Sip Tells A Story
        </p>

        <button className="hero-btn">
          Order Now
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;