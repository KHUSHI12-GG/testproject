import React from "react";

const Profile = () => {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div className="flex items-start min-h-screen bg-white">
      <div className="bg-gray w-[420px] h-[650px] rounded-lg shadow-md p-6 flex flex-col mt-10 mx-auto">
        <div className="border-b pb-10"> 
          <h2 className="text-lg font-semibold mb-1 ">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-4 border-b pb-4">
          <img
            src="./Capture.png" // Replace with real image URL
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Welcome,</h3>
            <p className="text-gray-500 text-sm">{userEmail}</p>
          </div>
        </div>

        {/* Bio Section */}
        <p className="text-gray-600 text-sm mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
