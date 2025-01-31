import React from 'react'

const RoadmapPhases = () => {
    return (
        <div>
            <section className="relative h-auto w-full bg-black" id="roadmap">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                            <defs>
                                <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                    <stop offset="0%" stopColor="#064E3B"></stop>
                                    <stop offset="100%" stopColor="#14532D" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
                        </svg>
                    </div>

                    <div className="pt-16 pb-12 md:pt-32 md:pb-20">
                        <div className="max-w-3xl pb-12 md:pb-20">
                            <h2 className="h2 bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                                Roadmap Phases
                            </h2>
                        </div>

                        
                        <div className="divide-y divide-slate-800 ">
                            <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
                                <div>
                                    <div className="inline-flex font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-6">
                                        Addon AI Roadmap
                                    </div>
                                </div>
                                <div className="grid font-semibold text-2xl md:grid-cols-2 gap-8 md:gap-12 mb-2 ">
                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">

                                            <h4 className=" text-slate-50 mb-3 font-semibold">Phase 1 - Foundation and Launch</h4>
                                        </div>
                                        <ul className="text-slate-300 list-disc text-base mx-2 ">
                                            <li>Project idea implementation and initial development of AI agent tools.</li>
                                            <li>Draft and publish the whitepaper alongside website development.</li>
                                            <li>Execute pre-launch marketing to build community awareness.</li>
                                            <li>Launch the AddOn Ai Bot, featuring tools like the Shadowban Analyzer and Tweet Crafter.</li>
                                            <li>Official launch of the $AddOn token.</li>
                                            <li>List $AddOn on visibility platforms such as Dextools, Dexscreener, CoinGecko (CG), and CoinMarketCap (CMC).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">

                                            <h4 className=" text-slate-50 mb-3 font-semibold">Phase 2 - Expansion and Collaboration</h4>
                                        </div>
                                        <ul className="text-slate-300 list-disc text-base mx-2 ">
                                            <li>Launch targeted marketing campaigns to promote awareness.</li>
                                            <li>Establish partnerships with DeFi projects, offering pre-booked free ad deals (3-day ad packages) upon AI ad agent launch.</li>
                                            <li>Conduct a full audit of our upcoming web app{`'`}s smart contract.</li>
                                            <li>Initiate internal and external testing to ensure platform stability.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">

                                            <h4 className=" text-slate-50 mb-3 font-semibold">Phase 3 - Product Rollout and Scaling</h4>
                                        </div>
                                        <ul className="text-slate-300 list-disc text-base mx-2 ">
                                            <li>Launch the AddOn Ai Monetiser platform and API.</li>
                                            <li>Deploy the AI Ad Agent Creator Web App.</li>
                                            <li>Initiate AMA (Ask Me Anything) sessions across Twitter, Telegram, and YouTube to highlight the platform{`'`}s capabilities.</li>
                                            <li>Use the incentive fund to attract and onboard new projects through appealing offers.</li>
                                            <li>Assemble an ambassador team to strengthen brand presence.</li>
                                            <li>Expand the AddOn Ai team to support operational growth and enhance development.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">

                                            <h4 className=" text-slate-50 mb-3 font-semibold">Phase 4 - Future Growth and Innovation</h4>
                                        </div>
                                        <ul className="text-slate-300 list-disc text-base mx-2 ">
                                            <li>Introduce a new whitepaper and roadmap to align with evolving market conditions and platform advancements.</li>
                                            <li>Focus on continuous growth, new partnerships, and feature development to maintain competitive edge and expand user base.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoadmapPhases