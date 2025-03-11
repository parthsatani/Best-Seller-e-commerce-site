import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Import useNavigate
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Hook to handle navigation
  const [product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const formRef = useRef(null); // Reference to scroll to the user info form
  const paymentRef = useRef(null); // Reference to scroll to the payment form
  const [showPayment, setShowPayment] = useState(false); // State for showing the payment form
  const [paymentMethod, setPaymentMethod] = useState("card"); // Default payment method is 'card'
  const [finalAmount, setFinalAmount] = useState(product?.price || 0); // Track the final amount including COD extra charges if applicable
  const [bankingDetails, setBankingDetails] = useState({
    accountNumber: "",
    ifscCode: "", // Added IFSC Code for bank payment
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [productAdded, setProductAdded] = useState(false); // State to track if product is added to cart

  useEffect(() => {
    fetch("/products.json") // Assuming your products.json is in the public directory
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((prod) => prod.id === parseInt(id)); // Find the product by ID
        setProduct(foundProduct);
        setFinalAmount(foundProduct?.price); // Set the initial price
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true); // Show payment options after form submission

    // Scroll to the payment section
    paymentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);

    // Apply ₹5 extra charge for COD
    if (method === "cod") {
      setFinalAmount(product?.price + 5);
    } else {
      setFinalAmount(product?.price); // No extra charge for card or banking
    }
  };

  const handleBankingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment processed! Total: ₹${finalAmount}`);

    // Navigate to the Order List page with the product details and success message
    navigate("/", {
      state: {
        product: product,
        successMessage: "Your order was successful!",
      },
    });
  };

  const handleAddToCart = () => {
    addToCart(product); // Add product to the cart
    setProductAdded(true); // Set the product added state to true
    setTimeout(() => setProductAdded(false), 3000); // Hide the message after 3 seconds
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#EBE8DB] min-h-screen">
      <div className="max-w-6xl mx-auto p-6 pt-20">
        <div className="flex items-center space-x-8">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-90 h-auto object-cover  rounded-md transition-transform duration-500 ease-in-out transform hover:scale-100 hover:rotate-y-360"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-4">₹{product.price}</p>
            <div className="mt-6">
              <button
                onClick={handleAddToCart} // Add product to cart
                className="mt-4 bg-gradient-to-r from-[#3D1900] to-[#B01052] text-white px-4 py-2 rounded transition duration-200 hover:from-[#B01052] hover:to-[#3D1900]"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  setShowForm(true); // Show the form when "Buy Now" is clicked
                  formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the form when clicked
                }}
                className="mt-4 ml-4 bg-gradient-to-r from-[#3D1900] to-[#e49409] text-white px-4 py-2 rounded transition duration-200 hover:from-[#e49409] hover:to-[#3D1900]"
              >
                Buy Now
              </button>
            </div>
            {/* Show Product Added Confirmation */}
            {productAdded && (
              <div className="mt-4 text-red-900 font-semibold">
                Product added to the cart!
              </div>
            )}
          </div>
        </div>

        {/* Conditionally Render the User Information Form */}
        {showForm && (
          <div ref={formRef} className="mt-8 mb-10 p-6 bg-gradient-to-tl to-[#ECDCBF] rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Enter Your Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Address</label>
                <textarea
                  name="address"
                  value={userInfo.address}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  required
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#3D1900] to-[#e49409] text-white px-6 py-2 rounded transition duration-200 hover:from-[#e49409] hover:to-[#3D1900]"
                
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Conditionally Render the Payment Form */}
        {showPayment && (
          <div ref={paymentRef} className="mt-8 p-6 bg-gradient-to-tl to-[#ECDCBF] rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Choose Payment Method</h3>
            <form onSubmit={handlePaymentSubmit} className="space-y-4 mt-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="card" className="text-sm font-semibold">
                  Credit/Debit Card
                </label>
              </div>

              {/* Debit/Credit Card Details */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailsChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardDetailsChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardDetailsChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Banking Details */}
              {paymentMethod === "banking" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={bankingDetails.accountNumber}
                      onChange={handleBankingDetailsChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={bankingDetails.ifscCode}
                      onChange={handleBankingDetailsChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Cash on Delivery Option */}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-sm font-semibold">
                  Cash on Delivery (COD) (+ ₹5)
                </label>
              </div>

              {/* Display Final Amount */}
              <p className="text-lg font-semibold mt-4">Final Amount: ₹{finalAmount}</p>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#3D1900] to-[#e49409] text-white px-6 py-2 rounded transition duration-200 hover:from-[#e49409] hover:to-[#3D1900]"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
