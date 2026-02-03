import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  return (
    <header className="header">
    <nav className="nav">
      <a href="#about" className="logo" onClick={handleMenuClose}>
        <h1 className="logo">Alex</h1>
      </a>
     <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#projects" onClick={handleMenuClose}>Projects</a>
        <a href="#skills" onClick={handleMenuClose}>Skills</a>
        <a href="#about" onClick={handleMenuClose}>About Me</a>
        <a href="#ContactMe" onClick={handleMenuClose}>ContactMe</a>
     </div>
     <button
     className="menu-toggle"
     onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
      ☰
     </button>
    </nav>
    </header>
  );
};

export default Header;
