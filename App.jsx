import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Navbar() {
  const cart = useSelector(state => state.cart.items);
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">🌿 Paradise Nursery</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/plants">Shop</Link>
          <Link to="/cart" className="cart-link">🛒 Cart ({cart.length})</Link>
        </div>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">Bring Nature's Beauty Into Your Home</p>
        <p className="landing-description">Discover our collection of premium indoor and outdoor plants</p>
        <Link to="/plants" className="cta-button">Shop Now</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;