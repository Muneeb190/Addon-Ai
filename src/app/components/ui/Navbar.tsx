'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/app/assets/logo.png';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white body-font bg-black fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        
        <a className="flex title-font font-medium items-center text-gray-900 mx-auto md:mx-0">
          <Image src={logo} alt="logo" height={48} width={48} />
        </a>

        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:translate-x-0 md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 items-center p-6 md:p-0">
            <button className="self-start mb-6 md:hidden text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">Home</a>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">About</a>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">Models</a>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">Tokenomics</a>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">Roadmap</a>
            <a className="text-lg hover:text-gray-400 transition-all duration-200 py-2 md:py-0">Socials</a>
          </div>
        </nav>

        <button className="hidden md:flex button z">
          Use Bot
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipPath="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
