import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import smt from '../assets/smt.png';
import ttc from '../assets/ttc.png';
import backg from '../assets/backg.png';
import logo from '../assets/logo.png'; // Add your logo image import here

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className="relative bg-black/20 text-white h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      {/* Navigation Bar */}
      <nav className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        <div className="flex items-center">
          <img src={logo} alt="Favored Online Inc Logo" className="w-40" />
        </div>
        <div className="space-x-4 hidden md:block">
          <button className="text-sm bg-[#EB48D5] px-4 py-2">
            <a href="https://www.shemodeltech.com" target="_blank">SHE MODEL TECH</a>
          </button>
          <button className="text-sm bg-[#D2AE2F] px-4 py-2">
            <a href="https://www.techtalentscity.com" target="_blank">TECHTALENTS CITY</a>
          </button>
        </div>
        <div className="md:hidden z-40">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {!isMobileMenuOpen && <FiMenu />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center z-30">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              <FiX />
            </button>
          </div>
          <button className="text-sm bg-[#EB48D5] px-4 py-2 mb-4">
            <a href="https://www.shemodeltech.com" target="_blank">SHE MODEL TECH</a>
          </button>
          <button className="text-sm bg-[#D2AE2F] px-4 py-2">
            <a href="https://www.techtalentscity.com" target="_blank">TECHTALENTS CITY</a>
          </button>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16 pb-12 md:pb-20">
          <h1 className="font-bold tracking-tight text-xl md:text-4xl lg:text-5xl xl:text-6xl">
            Empowering Future Innovators Through{' '}
            <span className="text-[#EB48D5]">Technology</span> and{' '}
            <span className="text-[#D2AE2F]">Talent Development</span>
          </h1>
          <p className="mt-6 text-sm md:text-xl">
          Leading the Future of Tech through Education
          </p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center md:mt-8 pb-8 md:pb-16 2xl:pb-24 px-12 xl:px-20">
        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px]">
          <img
            src={ttc}
            alt="Tech Talent City"
            className="absolute w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-black/30">
            <button className="text-sm bg-[#EB48D5] p-3">
              <a href="https://www.shemodeltech.com" target="_blank">SHE MODEL TECH</a>
            </button>
            <p className="max-w-xs mt-3 text-center">
              Inspiring and Equipping the Next Generation of Female Tech Leaders
            </p>
          </div>
        </div>
        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px]">
          <img
            src={smt}
            alt="She Model Tech"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-black/30">
            <button className="text-sm bg-[#D2AE2F] p-3">
              <a href="https://www.techtalentscity.com" target="_blank">TECHTALENTS CITY</a>
            </button>
            <p className="max-w-xs mt-3 text-center">
              Cultivating a Thriving Ecosystem for Emerging Tech Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
