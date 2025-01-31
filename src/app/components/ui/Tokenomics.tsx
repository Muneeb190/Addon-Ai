'use client'

import logo from '@/app/assets/logo.png'
import Image from 'next/image';
import React, { useState } from "react";

const Tokenomics = () => {
  const [tab, setTab] = useState("1");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section id="technologies" className='h-auto w-full bg-[url(/glow-top2.svg)] bg-cover bg-no-repeat'>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 md:space-y-0">
            
            <div className="md:w-7/12 lg:w-11/12 order-1 md:order-none max-md:text-center">
              <div>
                <div className="inline-flex font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-3">
                  Addon AI
                </div>
              </div>
              <h3 className="py-5 bg-clip-text text-transparent text-5xl font-bold bg-gradient-to-r from-green-700 via-slate-200 to-slate-200/60 pb-3">
                Tokenomics
              </h3>
              <p className="text-xl py-2 font-semibold text-slate-400 mb-8 ">
                The AddOn AI ecosystem is powered by $ADDON, the native token that drives transactions, incentives, and platform growth.
              </p>

              <button
                className={`flex items-center text-base font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${
                  tab !== "3" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                }`}
                onClick={() => setTab("3")}
              >
                <span>Supply: 10,000,000 (10M) (Max Supply)</span>
              </button>

              <button
                className={`flex items-center text-base font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${
                  tab !== "2" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                }`}
                onClick={() => setTab("2")}
              >
                <span>Network: Ethereum Mainnet</span>
              </button>

              <button
                className={`flex items-center text-base font-medium text-slate-50 mb-3 rounded border w-full px-3 py-3 transition duration-150 ease-in-out ${
                  tab !== "1" ? "border-green-700 opacity-50 bg-slate-800/25" : "border-green-700 shadow shadow-green-200/25"
                }`}
                onClick={() => setTab("1")}
              >
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
            <div className="md:w-5/12 lg:w-1/3">
              <div className="relative py-24 -mt-12">
                {/* Particles animation */}
                <div className="absolute inset-0 -z-10">
                  <canvas data-particle-animation="" data-particle-quantity="8" data-particle-staticity="30"></canvas>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48 flex justify-center items-center">
                    <Image className="" src={logo.src} width={264} height={264} alt="Token Icon" />
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
