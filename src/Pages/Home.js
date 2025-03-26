import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="text-center flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet.</p>
      
      <Link to="/createaccount">
        <button className="w-64 bg-purple-600 text-white py-2 rounded-lg mb-2">
          Create Account
        </button>
      </Link>

      <Link to="/login">
      
        <button className="w-64 bg-purple-300 text-purple-900 py-2 rounded-lg">
          Already Registered? Login
        </button>
      </Link> 
      
      
    </div>
  );
};

export default Home;

