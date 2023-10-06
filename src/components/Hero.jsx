import React, { useState } from 'react';
import VedioBg from '../assets/VedioBg.mp4';
import './Hero.css';

function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      <video src={VedioBg} autoPlay loop muted className="w-full h-auto object-cover sm:w-full sm:h-screen fixed top-0 left-0" />
      <header className="fixed top-0 left-0 w-full bg-opacity-70 bg-gray-800 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold">
            MoneyMaster
          </a>
          <nav className={`space-x-4 md:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Hero;
