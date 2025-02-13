import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Morale Legal Solutions</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;