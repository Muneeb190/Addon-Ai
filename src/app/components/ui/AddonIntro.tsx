'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/logo.png';
import { AnimatePresence, motion } from 'framer-motion';

const AddonIntro = () => {
    const [tab,] = React.useState("1");
    return (
        <div id='About' className='h-auto w-full'>
            <section className="bg-[url(/addon-ai.png)] bg-cover bg-no-repeat text-gray-400 flex items-center px-4 sm:px-6 lg:px-8 py-10">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 ml-52 md:mb-0">
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

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 px-4 sm:px-0">
                        {/* Subheading */}
                        <h5 className="text-lg sm:text-xl font-semibold text-transparent bg-gradient-to-b from-green-800 to-gray-200 bg-clip-text dark:from-white dark:to-slate-900/10">
                            Addon AI
                        </h5>

                        {/* Main Heading */}
                        <h1 className="title-font text-3xl sm:text-4xl font-bold leading-none text-transparent bg-gradient-to-b from-gray-400 to-gray-200 bg-clip-text dark:from-white dark:to-slate-900/10">
                            Introduction
                        </h1>

                        {/* Paragraph */}
                        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                            Historically, ad monetization has been a cornerstone of Web2{`'`}s exponential growth, enabling the digital economy to reach trillions of dollars by providing scalable and sustainable revenue models. Despite the surge in AI-driven projects, this essential strategy remains underutilized, leaving substantial potential untapped. <br /><br />
                            AddOn AI is here to change the game by bridging this gap and introducing innovative monetization solutions tailored specifically for the AI ecosystem. Our platform leverages the proven success of advertising monetization in Web2 and adapts it to meet the unique needs of modern AI agents and social projects. By offering a decentralized, user-friendly environment, AddOn AI empowers developers and project owners to seamlessly integrate advertising revenue streams, transforming their AI innovations into profitable ventures.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddonIntro;