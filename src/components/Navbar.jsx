import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
        <nav className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        <Link to={'/'} className="flex items-center">
          <img src={logo} alt="Favored Online Inc Logo" className="w-40" />
        </Link>
        <div className="space-x-4 hidden md:block">
          <button className="text-sm bg-[#81bb36] text-white px-6 py-2">
            <Link to={'/about'} className="font-medium text-white uppercase text-sm">About US</Link>
          </button>
          <button className="text-sm bg-[#EB48D5] text-white px-4 py-2">
            <a href="https://www.shemodeltech.com" target="_blank">SHE MODEL TECH</a>
          </button>
          <button className="text-sm bg-[#D2AE2F] text-white px-4 py-2">
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
          <button className="text-sm bg-[#81bb36] text-white px-10 py-2  mb-4">
          <Link to={'/about'} className="font-medium text-white uppercase" onClick={toggleMobileMenu}>About US</Link>
          </button>
          <button className="text-sm bg-[#EB48D5] text-white px-4 py-2 mb-4">
            <a href="https://www.shemodeltech.com" target="_blank">SHE MODEL TECH</a>
          </button>
          <button className="text-sm bg-[#D2AE2F] text-white px-4 py-2">
            <a href="https://www.techtalentscity.com" target="_blank">TECHTALENTS CITY</a>
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar