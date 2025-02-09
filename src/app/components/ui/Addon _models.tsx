'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import i1 from '@/app/assets/i1.png'
import i5 from '@/app/assets/i5.png'
import i6 from '@/app/assets/i6.png'
import i7 from '@/app/assets/i7.png'
import i8 from '@/app/assets/i8.png'
import i9 from '@/app/assets/i9.png'
import i10 from '@/app/assets/i10.png'
import i11 from '@/app/assets/i11.png'

const Addon_models = () => {
  const [activeSet, setActiveSet] = useState<'set1' | 'set2'>('set1')

  const handleToggle = (set: 'set1' | 'set2') => {
    setActiveSet(set)
  }

  return (
    <section id='Models' className="how bg-black h-auto w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-3">
                Addon AI Models
              </div>
            </div>
            <h2 id="how-it-works-heading" className="h2 bg-clip-text text-transparent text-5xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              {activeSet === 'set1' ? 'B2B Model' : 'B2C Model'}
            </h2>
            <p className="text-lg font-semibold text-slate-400" id="how-it-works-description">
              {activeSet === 'set1'
                ? 'Monetizing AI Agents and Social Platforms'
                : 'AI Advertisement Agent and Third-Party Ad Integration'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleToggle('set1')}
              className={`rounded-full py-1 focus:ring-2 focus:ring-green-300 btn text-black bg-white from-white/80 hover:text-white via-white to-white/80 hover:bg-black w-[130px] transition duration-150 ease-in-out group ${activeSet === 'set1' ? 'ring-2 ring-green-300' : ''
                }`}
            >
              B2B Model<span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
            <button
              onClick={() => handleToggle('set2')}
              className={`rounded-full py-1 focus:ring-2 focus:ring-green-300 btn text-black bg-white from-white/80 hover:text-white via-white to-white/80 hover:bg-black w-[130px] transition duration-150 ease-in-out group ${activeSet === 'set2' ? 'ring-2 ring-green-300' : ''
                }`}
            >
              B2C Model<span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>

          {/* Carousel Container */}
          <div id="carousel-container" className="relative">
            {/* Set 1 */}
            <div
              id="carousel-set-1"
              className={`carousel-content ${activeSet === 'set1' ? 'block' : 'hidden'
                }`}
            >
              <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l">
                <div className="stellar-carousel swiper-container group swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div className="swiper-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto" data-highlighter="" id="swiper-wrapper-160ad2710ba9745cc" aria-live="polite">
                    {/* Card 1 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px swiper-slide-active">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i1} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-semibold text-white text-lg mb-1">
                              Effortless Ad Space Rental
                            </div>
                            <div className="text-slate-400 mb-3">
                              Simplifies the process of listing and renting ad spaces on AI agents and social platforms.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2b-model/understanding-b2b-model">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i5} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-semibold text-white text-lg mb-1">
                              Comprehensive Revenue Tracking
                            </div>
                            <div className="text-slate-400 mb-3">
                              Provides detailed metrics on views, clicks, and overall ad performance.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https极目.addon-ai.gitbook.io/addon-ai/b2b-model/understanding-b2b-model">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i6} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-semibold text-white text-lg mb-1">
                              Secure Engagement
                            </div>
                            <div className="text-slate-400 mb-3">
                              Utilizes advanced systems to prevent botted interactions, ensuring genuine user engagement.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2b-model/understanding-b2b-model">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z极目 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i7} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-semibold text-white text-lg mb-1">
                              Automated Ad Management
                            </div>
                            <div className="text-slate-400 mb-3">
                              Streamlines the process of creating, managing, and optimizing ad campaigns through AI-driven automation.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2b-model/understanding-b2b-model">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Set 2 */}
            <div
              id="carousel-set-2"
              className={`carousel-content ${activeSet === 'set2' ? 'block' : 'hidden'
                }`}
            >
              <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-[#022b01e6]">
                <div className="stellar-carousel swiper-container group swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div className="swiper-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto" data-highlighter="" id="swiper-wrapper-1461f164914ef82a" aria-live="polite">
                    {/* Card 1 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px swiper-slide-active">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i8} width="56" height="56" alt="Icon 02" />
                          <div className="grow">
                            <div className="font-bold text-white text-lg mb-1">
                              Automated Ad Management
                            </div>
                            <div className="text-slate-400 mb-3">
                              Streamlines the process of creating, managing, and optimizing ad campaigns through AI-driven automation.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2c-model/understanding-ad-agents">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px swiper-slide-next">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i9} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-bold text-white text-lg mb-1">
                              Maximized ROI
                            </div>
                            <div className="text-slate-400 mb-3">
                              Ensures ads are precisely targeted and continuously optimized for the best possible performance.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2c-model/understanding-ad-agents">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i10} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-bold text-white text-lg mb-1">
                              Third-Party Ad Integration
                            </div>
                            <div className="text-slate-400 mb-3">
                              Plans to support the inclusion of external ad networks, offering users diverse advertising opportunities.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2c-model/understanding-ad-agents">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px">
                      <div className="relative h-full bg-[#040D00] rounded-[inherit] z-20 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                          <Image className="mb-3" src={i11} width="56" height="56" alt="Icon 01" />
                          <div className="grow">
                            <div className="font-bold text-white text-lg mb-1">
                              AI Tools Addons
                            </div>
                            <div className="text-slate-400 mb-3">
                              Provides access to specialized AI utilities, such as the Shadownban Community Analyzer, to enhance project performance and engagement.
                            </div>
                            <div className="text-right">
                              <a className="text-sm font-medium text-white hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href="https://addon-ai.gitbook.io/addon-ai/b2c-model/understanding-ad-agents">Learn More
                                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group" tabIndex={-1} aria-label="Previous slide" aria-controls="swiper-wrapper-1461f164914ef82a" aria-disabled="true" disabled>
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-green-500 group-hover:fill-green-200 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-1461f164914ef82a" aria-disabled="false">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-green-500 group-hover:fill-green-200 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Addon_models