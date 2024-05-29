import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <nav className="bg-white border-b-2 w-full p-4">
      <div className="mx-auto flex h-full max-w-[1280px] flex-1 py-0 px-2 md:px-24">
        <div className="text-xl font-bold">NovelApp</div>
        <div className="mr-8 flex flex-1 justify-center items-center pt-[8px] sm:pt-0 md:ml-13">
          <a href="/" className="flex h-full items-center px-4">Beranda</a>
          <a href="/library" className="flex h-full items-center px-4">Library</a>
          <a className="flex h-full items-center px-4" href="/novels">Novel</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              className={`border rounded-md py-1 px-3 text-gray-700 transition-width duration-300 ${searchFocused ? 'w-64' : 'w-32'}`} 
              placeholder="Search..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>
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
              <div class="border-b-2 px-4 py-3 text-sm text-gray-900">
                    <div>Bonnie Green</div>
                </div>
                <a href="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.38-.56 2.63-1.46 3.54A4.978 4.978 0 017 17c-1.38 0-2.63-.56-3.54-1.46A4.978 4.978 0 012 12c0-1.38.56-2.63 1.46-3.54A4.978 4.978 0 017 7c1.38 0 2.63.56 3.54 1.46A4.978 4.978 0 0112 11zm4.72 1.72a7.978 7.978 0 001.28-4.72c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7z"></path>
                  </svg>
                  Profile
                </a>
                <a href="/settings" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.38-.56 2.63-1.46 3.54A4.978 4.978 0 017 17c-1.38 0-2.63-.56-3.54-1.46A4.978 4.978 0 012 12c0-1.38.56-2.63 1.46-3.54A4.978 4.978 0 017 7c1.38 0 2.63.56 3.54 1.46A4.978 4.978 0 0112 11zm4.72 1.72a7.978 7.978 0 001.28-4.72c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7z"></path>
                  </svg>
                  Settings
                </a>
                <a href="/logout" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.38-.56 2.63-1.46 3.54A4.978 4.978 0 017 17c-1.38 0-2.63-.56-3.54-1.46A4.978 4.978 0 012 12c0-1.38.56-2.63 1.46-3.54A4.978 4.978 0 017 7c1.38 0 2.63.56 3.54 1.46A4.978 4.978 0 0112 11zm4.72 1.72a7.978 7.978 0 001.28-4.72c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7c0-1.38-.56-2.63-1.46-3.54A4.978 4.978 0 0015 2c-1.38 0-2.63.56-3.54 1.46A4.978 4.978 0 0011 7c0 1.38.56 2.63 1.46 3.54A4.978 4.978 0 0015 12c1.38 0 2.63-.56 3.54-1.46A4.978 4.978 0 0020 7z"></path>
                  </svg>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
