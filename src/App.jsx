import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { useState, useEffect } from "react";
import LoadingPage from './components/LoadingPage'; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <CartProvider>
        <Router>
          
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
             
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              
              <ScrollToTopButton />
            </>
          )}
        </Router>
      </CartProvider>
    
  );
}

export default App;
