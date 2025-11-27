import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold text-gray-800">Muneeb Ahmad</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-black cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <li className="hover:text-black">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
