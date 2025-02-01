import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/logo.png';

const AddonIntro = () => {
    return (
        <section className="bg-[url(/addongrid.png)] h-auto min-h-screen w-full bg-cover bg-no-repeat bg-bottom text-gray-600 body-font flex items-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                    <Image className="object-cover object-center mb-6 md:mb-0" alt="logo" src={logo} height={120} width={120} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 px-4 sm:px-0">
                    <h5 className="text-lg sm:text-xl font-semibold text-transparent bg-gradient-to-b from-green-800 to-gray-200 bg-clip-text dark:from-white dark:to-slate-900/10">Addon AI</h5>
                    <h1 className="title-font text-3xl sm:text-4xl font-bold leading-none text-transparent bg-gradient-to-b from-gray-400 to-gray-200 bg-clip-text dark:from-white dark:to-slate-900/10">
                        Introduction
                    </h1>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-400 bg-gradient-to-b from-gray-400 to-gray-200 bg-clip-text">
                        Historically, ad monetization has been a cornerstone of Web2[`'`]s exponential growth, enabling the digital economy to reach trillions of dollars by providing scalable and sustainable revenue models. Despite the surge in AI-driven projects, this essential strategy remains underutilized, leaving substantial potential untapped. <br /><br />
                        AddOn AI is here to change the game by bridging this gap and introducing innovative monetization solutions tailored specifically for the AI ecosystem. Our platform leverages the proven success of advertising monetization in Web2 and adapts it to meet the unique needs of modern AI agents and social projects. By offering a decentralized, user-friendly environment, AddOn AI empowers developers and project owners to seamlessly integrate advertising revenue streams, transforming their AI innovations into profitable ventures.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AddonIntro;
