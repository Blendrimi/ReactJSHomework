import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="bg-[#1e1e1e] text-white flex items-center px-8 py-3 justify-between font-sans fixed w-full top-0 left-0 z-[1000]">
      <div className="pl-8 text-2xl font-bold">
        <span className="text-gray-300">gjirafa</span>
        <span className="text-orange-500">50</span>
      </div>

      <div className="flex items-center bg-white rounded-full px-4 py-2 w-[33%]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Kërko produkte"
          className="flex-grow border-none outline-none text-black text-sm"
        />
        <FaSearch className="text-gray-500 text-base" />
      </div>

      <div className="flex items-center gap-6 pr-4 text-lg">
        <FaHeart />
        <FaShoppingCart />
        <div className="bg-[#333] rounded-full px-3 py-1 flex items-center gap-2 text-sm">
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default Header;
