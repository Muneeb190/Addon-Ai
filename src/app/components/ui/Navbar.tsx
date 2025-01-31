'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.png'


export const Navbar = () => {
  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center lg:max-w-full px-12">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={logo}
            alt=''
            height={96}
            width={96}
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">Home</a>
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">About</a>
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">Models</a>
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">Tokenimcs</a>
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">Roadmap</a>
          <a className="mr-14 text-lg hover:text-gray-400 transition-all duration-200">Socials</a>
        </nav>

        <button className="button">
          Use Bot
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>


      </div>
    </header>
  )
}

