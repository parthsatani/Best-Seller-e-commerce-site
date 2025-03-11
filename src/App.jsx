import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { useState, useEffect } from "react";
import LoadingPage from './components/LoadingPage'; // Import the LoadingPage component
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Simulating loading state for demonstration (e.g., data fetching or any initial setup)
  useEffect(() => {
    // Simulating a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading page after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    
      <CartProvider>
        <Router>
          {/* If the app is loading, show the LoadingPage */}
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              {/* Render the Navbar and Routes once loading is complete */}
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              {/* ScrollToTopButton should be outside Routes to work globally */}
              <ScrollToTopButton />
            </>
          )}
        </Router>
      </CartProvider>
    
  );
}

export default App;
