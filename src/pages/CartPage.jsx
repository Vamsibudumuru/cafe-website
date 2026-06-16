function CartPage({ cart, removeFromCart }) {

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>

            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button>
            Checkout
          </button>
        </>
      )}

    </div>
  );
}

export default CartPage;