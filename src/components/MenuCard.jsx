function MenuCard({ item, addToCart }) {

  return (
    <div className="menu-card">

      <img src={item.image} alt={item.name} />

      <div className="menu-content">

        <h3>{item.name}</h3>

        <p>{item.price}</p>

        <button
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default MenuCard;