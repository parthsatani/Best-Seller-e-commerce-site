import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="bg-[#EBE8DB] min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="border p-4 mb-4 flex justify-between items-center bg-gradient-to-tl to-[#ECDCBF] shadow-md rounded-md"
                >
                  <div>
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button
                    className="bg-gradient-to-r from-[#3D1900] to-[#b01010] text-white px-4 py-2 rounded transition duration-200 hover:from-[#b01010] hover:to-[#3D1900]"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-right mt-4">
              <p className="font-bold text-lg">
                Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
