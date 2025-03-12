import React from "react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

const Conclusion = () => {
  return (
    <div id="conclusion" className="max-w-7xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Thank You for Choosing Best-Seller
      </h2>
      
      <p className="text-lg text-gray-700 mb-6 text-center">
        At Best-Seller, we believe that shopping should be an experience that excites and delights. We are passionate about offering you the best products at unbeatable prices. Our curated selection of top-rated and trending products is designed to ensure that every item you choose exceeds your expectations. From home essentials to the latest gadgets, we strive to bring quality, innovation, and value to your doorstep.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Our mission is simple: to provide exceptional customer service, amazing products, and a seamless shopping experience. Whether you're looking to upgrade your home, find the perfect gift, or discover something new, Best-Seller is your one-stop destination. We are committed to providing our customers with the best in quality, convenience, and satisfaction.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-center">
        We take great pride in our customer support and are always here to assist you with any questions or concerns. If you need help, have product inquiries, or simply want to reach out to us, don't hesitate to get in touch through our social media channels or directly via WhatsApp. We value your feedback and are constantly working to improve our service to ensure your satisfaction.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-center">
        We are excited to have you as part of our Best-Seller family, and we look forward to continuing to serve you with the best products and deals available. Thank you for trusting us with your shopping needs. Stay connected with us to be the first to know about our new arrivals, exclusive promotions, and upcoming sales events!
      </p>

      <div className="text-center space-x-6 flex items-center justify-center">
        <a
          href="https://www.instagram.com/your-instagram" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FDCB82] rounded-lg hover:scale-105 transform transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/your-whatsapp-number" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg hover:scale-105 transform transition duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Conclusion;
