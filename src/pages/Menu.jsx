import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";

function Menu({ addToCart }) {

  return (
    <div className="page">

      <h1>Our Menu</h1>

      <div className="menu-grid">

        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Menu;