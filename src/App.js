import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";  // ✅ Importing Profile
import Account from "./Pages/Account";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* ✅ Ensuring Home is the default page */}
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> {/* New Route */}
      <Route path="/createaccount" element={<Account />} />
    
    </Routes>
  );
}

export default App;

