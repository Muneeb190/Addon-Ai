import Image from 'next/image'
import React from 'react'

const sectionFooter = () => {
    return (
        <section className="relative bg-black">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                    <canvas data-particle-animation="" data-particle-quantity="6" data-particle-staticity="30" width="320" height="320" style={{ width: '320px', height: '320px' }}></canvas>
                </div>
            </div>

            <div id="opos" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-16 md:pt-32">

                    <div className="relative pb-12 md:pb-20">
                        <div className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                                <defs>
                                    <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                        <stop offset="0%" stopColor="#16A34A"></stop>
                                        <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)"></path>
                            </svg>

                        </div>
                        <div className="grid md:grid-cols-12 gap-6 group" data-highlighter="">
                            <div className="md:col-span-12 aos-init aos-animate" data-aos="fade-down" style={{ '--mouse-x': '1075px', '--mouse-y': '115.5px' } as React.CSSProperties}>
                                <div className="relative h-full bg-green-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-green-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.green.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                                    <div className="relative h-full bg-neutral-950 rounded-[inherit] z-20 overflow-hidden">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                                            <div className="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                                                    <defs>
                                                        <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                                            <stop offset="0%" stopColor="#34D399"></stop>
                                                            <stop offset="100%" stopColor="#34D399" stopOpacity="0"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path fill="url(#bs-a)" fillRule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7"></path>
                                                </svg>

                                            </div>

                                            <div className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                                                <div className="absolute inset-0 translate-z-0 bg-green-500 rounded-full blur-[120px] opacity-70"></div>
                                                <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                                            </div>


                                            <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                                                <div className="mb-5">
                                                    <div>
                                                        <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                                                            Optimized for security
                                                        </h3>
                                                        <p className="text-slate-400">
                                                            AddOn AI prioritizes security to ensure a safe and reliable platform for users, advertisers, and developers. Our multi-layered security measures protect data, prevent fraud, and secure smart contracts, fostering trust and long-term platform stability.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="button">
                                                        Learn More
                                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                                                clipPath="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="relative w-full h-64 md:h-auto overflow-hidden">
                                                <Image className="bg-[url(/addon-bgrem.png)] bg-no-repeat bg-cover absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0 transform rotate-90" src="/addon-bgrem.png" width={504} height={400} alt="Feature 01" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sectionFooter