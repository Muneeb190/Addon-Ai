'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/app/assets/logo.png';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id='nav' className="text-white body-font bg-black absolute w-full z-40">
      <div className="container mx-auto flex justify-between items-center py- px-7 ">
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <a href='' className="flex title-font font-medium items-center text-gray-900 mx-auto md:mx-0">
          <Image src={logo} alt="logo" height={72} width={72} />
        </a>

        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:translate-x-0 md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 items-center p-6 md:p-0">
            <button className="self-start mb-6 md:hidden text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <a href='#Home' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">Home</a>
            <a href='#About' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">About</a>
            <a href='#Models' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">Models</a>
            <a href='#Technology' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">Tokenomics</a>
            <a href='#Roadmap' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">Roadmap</a>
            <a href='#Contact' className="text-base hover:text-gray-400 transition-all duration-200 py-2 ">Socials</a>
          </div>
        </nav>

        <button onClick={() => window.open('https://t.me/addonAiBot', '_blank')} className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-3 py-1 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Use Bot
        </button>
      </div>
    </header>
  );
};
