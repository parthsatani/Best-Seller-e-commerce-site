import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ReviewsSlider from "../pages/ReviewsSlider";
import Conclusion from "../pages/Conclusion";
import gsap from "gsap";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));

    const handleMouseMove = (e) => {
    
      gsap.to(cursorRef.current, {
        x: e.clientX - cursorRef.current.offsetWidth / 2-20, 
        y: e.clientY - cursorRef.current.offsetHeight / 2-100, 
        duration: 0.2, 
        ease: "power2.out", 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { opacity: 1, scale: 1.5, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { opacity: 0, scale: 1, duration: 0.3 });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="max-w-10xl bg-[#EBE8DB] mx-auto p-6 relative">

      <div
        ref={cursorRef}
        className="custom-cursor"
      >
        <h5 className="text-white text-[.6vw] text-center">Tap View</h5>
      </div>

      <h2 className="relative text-3xl font-bold text-center mb-6 after:block after:h-1 after:w-0 after:bg-black after:rounded-full after:transition-all after:duration-400 after:mx-auto hover:after:w-80">
        Welcome to Best Seller
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border bg-gradient-to-tl to-[#ECDCBF] p-4 rounded-lg shadow-md items-center justify-center relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-auto h-40 object-cover rounded-md mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">₹{product.price}</p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-gradient-to-r from-[#3D1900] to-[#B01052] text-white px-4 py-2 rounded transition duration-200 hover:from-[#B01052] hover:to-[#3D1900]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div id="reviews">
        <ReviewsSlider />
      </div>
      <div id="conclusion">
        <Conclusion />
      </div>
    </div>
  );
};

export default Home;
