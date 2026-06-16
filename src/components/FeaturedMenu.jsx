const items = [
  {
    name: "Cappuccino",
    price: "₹199"
  },
  {
    name: "Latte",
    price: "₹179"
  },
  {
    name: "Chocolate Cake",
    price: "₹149"
  }
];

function FeaturedMenu() {
  return (
    <section>
      <h2>Featured Menu</h2>

      <div className="cards">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMenu;