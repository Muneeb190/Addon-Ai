'use client'

import logo from '@/app/assets/logo.png'
import Image from 'next/image';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tokenomics = () => {
  const [tab, setTab] = useState("1");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section id="Technology" className='h-auto w-full bg-[url(/glow-top2.svg)] bg-cover bg-no-repeat flex justify-center overflow-x-hidden'>
      <div className="max-w-5xl px-4 sm:px-6">
        <div className="pt-16 md:pt-32 md:pb-10">
          <div className="max-w-xl md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 md:space-y-0">

            {/* Left Content Section */}
            <div className="md:w-7/12 lg:w-11/12 order-1 md:order-none max-md:text-center">
              <div>
                <div className="inline-flex font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-3">
                  Addon AI
                </div>
              </div>
              <h3 className="py-5 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-slate-200 to-slate-200/60 pb-3">
                Tokenomics
              </h3>
              <p className="text-lg sm:text-xl py-2 font-semibold text-slate-400 mb-8">
                The AddOn AI ecosystem is powered by $ADDON, the native token that drives transactions, incentives, and platform growth.
              </p>

              {/* Buttons */}
              <button
                className={`flex items-center text-sm font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${tab !== "3" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                  }`}
                onClick={() => setTab("3")}
              >
                <svg className="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M14.3.极目.4 1.4 0 .4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 极目.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                </svg>
                <span>Supply: 10,000,000 (10M) (Max Supply)</span>
              </button>

              <button
                className={`flex items-center text-sm font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${tab !== "2" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                  }`}
                onClick={() => setTab("2")}
              >
                <svg className="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                </svg>
                <span>Network: Ethereum Mainnet</span>
              </button>

              <button
                className={`flex items-center text-sm font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${tab !== "1" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                  }`}
                onClick={() => setTab("1")}
              >
                <svg className="shrink-0 fill-green-300 mr-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7822 0.104754C11.3335 -0.136181 10.7847 0.0526024 10.5565 0.526388L3.77694 14.6015C3.54874 15.0753 3.72759 15.6544 4.17638 15.8953C4.30874 15.9663 4.44979 16 4.58877 16C4.92094 16 5.24114 15.8077 5.40207 15.4737L12.1816 1.39852C12.4098 0.924802 12.231 0.345624 11.7822 0.104754Z" fill="#86EFAC" />
                  <path d="M6.91436 4.74011C6.91436 2.7279 5.36343 1.09082 3.45712 1.09082C1.55093 1.09082 0 2.7279 0 4.74011C0 6.75226 1.55093 8.38935 3.45718 8.38935C5.3635 8.38935 6.91436 6.75226 6.91436 4.74011ZM3.45718 6.46495C2.5562 6.46495 1.82312 5.69115 1.82312 4.74011C1.82312 3.78901 2.5562 3.01522 3.45718 3.01522C4.35823 3.01522 5.0913 3.78895 5.0913 4.74011C5.09124 5.69115 4.35823 6.46495 3.45718 6.46495Z" fill="#86EFAC" />
                  <path d="M12.5427 7.61133C10极目.7.61133 9.08545 9.24841 9.08545 11.2606C9.08545 13.2727 10.6363 14.9098 12.5427 14.9098C14.4489 14.9098 15.9999 13.2728 15.9999 11.2606C15.9999 9.24835 14.449 7.61133 12.5427 7.61133ZM12.5427 12.9853C11.6416 12.9853 10.9086 12.2115 10.9086 11.2605C10.9086 10.3095 11.6416 9.53566 12.5427 9.53566C13.4437 9.53566 14.1768 10.3095 14.1768 11.2605C14.1768 12.2115 13.4437 12.9853 12.5427 12.9853Z" fill="#86EFAC" />
                </svg>
                <span>Buy/Sell Tax: 5%</span>
              </button>

              <p className="text-lg text-white mb-2">Contract Address:</p>
              <button
                className="flex items-center font-medium text-slate-50 mb-3 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out text-xs border-green-700 shadow shadow-green-200/25"
                onClick={() => copyToClipboard("0xa579472f17b6E1b6C5dED2A785067a89EC536ce8")}
              >
                0xa579472f17b6E1b6C5dED2A785067a89EC536ce8
              </button>
            </div>

            {/* Right Image Section */}
            <div className="md:w-5/12 relative lg:w-1/3">
              <div className="relative py-32 md:py-52 -mt-12">
                {/* Particles animation */}
                <div className="absolute inset-0 -z-10">
                  <canvas data-particle-animation="" data-particle-quantity="8" data-particle-staticity="30"></canvas>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48 flex justify-center items-center">
                    {/* Halo effect */}
                    <svg
                      className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                      width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#064E3B" />
                          <stop offset="76.382%" stopColor="#115E59" />
                          <stop offset="100%" stopColor="#14532D" />
                        </linearGradient>
                      </defs>
                      <g fillRule="evenodd">
                        <path className="pulse" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z">
                        </path>
                        <path className="pulse pulse-1" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.极目.391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z">
                        </path>
                        <path className="pulse pulse-2" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z">
                        </path>
                      </g>
                    </svg>
                    {/* Grid */}
                    <div
                      className="absolute z-0 inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]"
                    >
                      <div className="h-[200%] animate-endless">
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"
                        ></div>
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"
                        ></div>
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"
                        ></div>
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"
                        ></div>
                      </div>
                    </div>
                    {/* Icons */}
                    <div>
                      <AnimatePresence mode="wait">
                        {tab === "1" && (
                          <motion.div
                            key="1"
                            initial={{ opacity: 0, rotate: -60 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 60 }}
                            transition={{ duration: 0.7, ease: [0.68, -0.3, 0.32, 1] }}
                            className="z-50"
                          >
                            <Image src={logo} width="264" height="264" alt="Icon 01" />
                          </motion.div>
                        )}
                        {tab === "2" && (
                          <motion.div
                            key="2"
                            initial={{ opacity: 0, rotate: -60 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 60 }}
                            transition={{ duration: 0.7, ease: [0.68, -0.3, 0.32, 1] }}
                            className="z-50"
                          >
                            <Image src={logo} width="264" height="264" alt="Icon 01" />
                          </motion.div>
                        )}
                        {tab === "3" && (
                          <motion.div
                            key="3"
                            initial={{ opacity: 0, rotate: -60 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 60 }}
                            transition={{ duration: 0.7, ease: [0.68, -0.3, 0.32, 1] }}
                            className="z-50"
                          >
                            <Image src={logo} width="264" height="264" alt="Icon 01" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;