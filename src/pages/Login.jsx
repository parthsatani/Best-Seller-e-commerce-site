const Login = () => {
  return (
    <div className="bg-[#EBE8DB] min-h-screen flex items-center justify-center">
  <div className="max-w-md mx-auto p-6 bg-gradient-to-tl to-[#ECDCBF] shadow-md rounded-lg mb-25 hover:scale-110">
    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
    <form>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button className="w-full bg-gradient-to-r from-[#3D1900] to-[#B01052] text-white px-4 py-2 rounded transition duration-200 hover:from-[#B01052] hover:to-[#3D1900]">
        Login
      </button>
    </form>
    <div className="mt-6 flex justify-between">
    {/* Forgot Password Link */}
    <div className="text-center mt-4 mb-4 ">
      <button onClick={() => alert("Forgot Password placeholder")}><a href="#" className="text-black hover:underline">Forgot Password?</a>
    </button></div>
    
    {/* Google Login Button */}
    
      <button
        onClick={() => alert("Google Login placeholder")}
        className="bg-gradient-to-r from-[#3D1900] to-[#e49409] text-white transition duration-200 hover:from-[#e49409]  py-1 px-2 rounded-full flex items-center space-x-2 hover:to-[#3D1900]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
    </div>
  </div>
</div>


  );
};

export default Login;
