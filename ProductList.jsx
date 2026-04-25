import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";

function ProductList(){
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const plants = [
    { id: 1, name: "Rose", price: 100, image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop" },
    { id: 2, name: "Tulsi", price: 120, image: "https://images.unsplash.com/photo-1585181662930-f8a72dafe4b1?w=300&h=300&fit=crop" },
    { id: 3, name: "Money Plant", price: 150, image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&h=300&fit=crop" },
    { id: 4, name: "Aloe Vera", price: 130, image: "https://images.unsplash.com/photo-1607771996702-ba8feb51a6c9?w=300&h=300&fit=crop" },
    { id: 5, name: "Snake Plant", price: 180, image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=300&h=300&fit=crop" },
    { id: 6, name: "Cactus", price: 90, image: "https://images.unsplash.com/photo-1530267839191-97b2ba28da39?w=300&h=300&fit=crop" }
  ];

  return (
    <>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ color: "#2d6a4f", marginBottom: "2rem", fontSize: "2.5rem" }}>Our Collection</h1>
        <div className="products">
          {plants.map(item => {
            const added = cart.find(i => i.id === item.id);
            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2d6a4f" }}>₹{item.price}</p>
                <button
                  disabled={added}
                  onClick={() => dispatch(addToCart(item))}
                  style={{
                    backgroundColor: added ? "#ccc" : "#40916c",
                    cursor: added ? "not-allowed" : "pointer"
                  }}
                >
                  {added ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;