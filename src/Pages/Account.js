import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const [message, setMessage] = useState(""); // ✅ Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);

    setMessage("Account created successfully! Redirecting to login..."); // ✅ Show message
    setTimeout(() => navigate("/login"), 2000); // ✅ Redirect after 2 seconds
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create your PopX account</h2>

        {message && ( // ✅ Show success message
          <p className="text-green-600 text-sm text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "fullName" },
            { label: "Phone number", name: "phoneNumber" },
            { label: "Email address", name: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Company name", name: "companyName" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{label} *</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Are you an Agency? *</label>
            <div className="flex gap-4 mt-2">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value={option.toLowerCase()}
                    checked={formData.isAgency === option.toLowerCase()}
                    onChange={handleChange}
                    className="form-radio text-purple-600"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
