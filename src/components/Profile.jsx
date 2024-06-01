import React, { useState } from 'react';




const Profile = () => {
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" // Ganti dengan URL gambar avatar Anda
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {dropdownOpen && (
        <div className="absolute -left-14 mt-6 w-40 bg-white border rounded-md shadow-lg py-1 z-20">
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t-2 border-l-2 bg-white" />
          <div className="flex items-center border-b-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
            <div className='flex items-center'>
             <img
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" // Ganti dengan URL gambar avatar Anda
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                />
                <div>Bonnie Green</div>
                </div>
          </div>
          <a
            href="/profile"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="/settings"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="/logout"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
}

export default Profile;
