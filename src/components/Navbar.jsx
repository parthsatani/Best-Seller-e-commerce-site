import { useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{backgroundColor:"#3D0301"}} className="text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="relative text-2xl font-bold text-white after:block after:h-1 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 after:mx-auto hover:after:w-full">
          <Link to="/">Best-Seller</Link>
        </h1>

        <ul className="hidden md:flex space-x-10">
          <li>
            <Link to="/" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Home</Link>
          </li>
          <li>
            <a href="#reviews" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Reviews</a>
          </li>
          <li>
            <a href="#conclusion" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Conclusion</a>
          </li>
          <li>
            <Link to="/cart" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Cart <i className="ri-shopping-cart-line"></i></Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Login <i className="ri-user-add-line"></i></Link>
          </li>
        </ul>

        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <i className={`ri-menu-3-line text-3xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[#3D0301] text-white p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Home</Link>
            </li>
            <li>
              <a href="#reviews" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Reviews</a>
            </li>
            <li>
              <a href="#conclusion" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Conclusion</a>
            </li>
            <li>
              <Link to="/cart" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Cart <i className="ri-shopping-cart-line"></i></Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-black hover:font-bold hover:bg-gradient-to-r from-[#B03052] to-[#D76C82] p-2 pb-2.5 rounded-4xl">Login <i className="ri-user-add-line"></i></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
