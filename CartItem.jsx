import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice.jsx";
import { Link } from "react-router-dom";

function CartItem(){
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>🛒 Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/plants" style={{ textDecoration: "none" }}>
            <button style={{ marginTop: "1rem" }}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: "2rem" }}>
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p style={{ fontWeight: "600", color: "#2d6a4f" }}>Total: ₹{item.price * item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>
                  <button 
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{ backgroundColor: "#d62828" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            💰 Grand Total: ₹{total}
          </div>

          <div className="cart-actions">
            <button 
              onClick={() => alert("Coming Soon! 🚀")}
              style={{ backgroundColor: "#2d6a4f" }}
            >
              Proceed to Checkout
            </button>
            <Link to="/plants" style={{ textDecoration: "none" }}>
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;