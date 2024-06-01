import React, { useState } from 'react';
import Profile from "./Profile";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);


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
          <a href="/" className="flex h-full items-center px-4 font-semibold">Beranda</a>
          <a href="/library" className="flex h-full items-center px-4 font-semibold">Library</a>
          <a className="flex h-full items-center px-4 font-semibold" href="/novels">Novel</a>
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
          <Profile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
