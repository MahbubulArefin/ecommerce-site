const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cartItems.map((item, idx) => (
        <div key={idx} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))
    )}
  </div>
);

export default Cart;
