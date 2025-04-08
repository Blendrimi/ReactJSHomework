import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-gray">gjirafa</span><span className="logo-orange">50</span>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Kërko produkte" />
        <FaSearch className="search-icon" />
      </div>

      <div className="icons">
        <FaHeart />
        <FaShoppingCart />
        <div className="login-btn">
          <FaUser />
          <span>Kyçu</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
