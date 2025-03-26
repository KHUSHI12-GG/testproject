import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true"); // ✅ Save login status
      localStorage.setItem("userEmail", email); // ✅ Save user email
      console.log("Logged in successfully");
      navigate("/profile"); // Redirect to profile
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Sign in to your PopX account</h2>
        <p className="text-gray-500 text-sm mt-2">Enter your details to proceed</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 mt-6 rounded-lg font-semibold hover:bg-purple-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
