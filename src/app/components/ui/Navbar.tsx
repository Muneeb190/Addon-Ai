'use client'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="absolute w-full z-30" style={{ backgroundColor: 'black' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo section remains unchanged */}
          <div className="flex-1">
            <a className="inline-flex" href="" aria-label="Cruip">
              <img
                className="max-w-none z-50"
                src="./images/file.png"
                width="70"
                height="70"
                alt="Stellar"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:grow navbar-text">
            <ul className="flex grow justify-start flex-wrap items-center">
              {['Home', 'About', 'Models', 'Tokenomics', 'Roadmap', 'Socials'].map((item) => (
                <li key={item}>
                  <a
                    className="font-medium text-sm text-green hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://t.me/addonAiBot', '_blank')} 
              className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-3 py-1 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Use Bot
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center ml-4">
            <button
              className="hamburger-menu"
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="menu-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <nav
              id="mobile-nav"
              className={`absolute top-full z-20 right-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration2 300 ease-in-out ${
                isMobileMenuOpen ? 'max-h-screen opacity100' : 'max-h0 opacity0'
              }`}
            >
              <ul className="flex flex-col items-center border border-green600 rounded-lg px4 py4 my4 shadow2xl backdrop-filter backdrop-blur-lg bg-opacity20">
                {['Home', 'About', 'Models', 'Tokenomics', 'Socials'].map((item) => (
                  <li key={item}>
                    <a
                      className="flex font-medium text-sm text-green hover:text-white py2"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                
                {/* Social Links */}
                <div className="flex flex-row items-center justify-center mt10">
                  {[
                    ['Twitter', 'https://twitter.com/Addon_Ai'],
                    ['Etherscan', 'https://etherscan.io/address/0xa579472f17b6E1b6C5dED2A785067a89EC536ce8'],
                    ['Gitbook', 'https://addonai.gitbook.io'],
                    ['Telegram', 'https://t.me/Addon_Ai'],
                    ['Dextools', 'dextools.io/app/en/ether/pair-explorer/0xa579472f17b6E1b6C5dED2A785067a89EC536ce8']
                  ].map(([label, url]) => (
                    <li key={label} className="mx2 footer">
                      <a
                        className="flex justify-center items-center text-green500 hover:text-green400 transition duration150 ease-in-out"
                        href={url}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* Keep SVG icons here */}
                      </a>
                    </li>
                  ))}
                </div>
                
                <button 
                  onClick={() => window.open('https://t.me/addonAiBot', '_blank')} 
                  className="bg-green950 text-green400 border border-green400 border-b4 font-medium overflow-hidden relative px3 py1 rounded-full hover:brightness150 hover:border-t4 hover:border-b active:opacity75 outline-none duration300 group mt4"
                >
                  Use Bot
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}