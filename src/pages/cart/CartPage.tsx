import { useCartStore } from "../../context/useCartStore";
import "./CartPage.css";
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container section">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart_items">
          {cart.map((item) => (
            <div key={item.id} className="cart_item">
              <img src={item.image} alt={item.title} className="cart_item_image" />
              <div className="cart_item_details">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <div className="quantity_controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove_button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart_summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="clear_cart_button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;