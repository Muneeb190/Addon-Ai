import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.png'

const AddonIntro = () => {
    return (
        <section className="bg-[url(/addongrid.png)] lg:h-3/4 bg-cover text-gray-600 body-font h-screen w-full bg-bannerImg bg-no-repeat bg-bottom">
            <div className="container mx-auto flex px-1 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center ml-44 mb-8" alt="logo" src={logo} height={200} width={200} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ml-20 mt-32">
                    <h5>Addon AI</h5>
                    <h1 className="title-font sm:text-5xl mb-4 text-gray-400 bg-gradient-to-b from-gray-400 to-gray-200 bg-clip-text text-center text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">Introduction
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-400 bg-gradient-to-b from-gray-400 to-gray-200 bg-clip-text text-start text-lg font-bold">Historically, ad monetization has been a cornerstone of Web2{`'`}s exponential growth, enabling the digital economy to reach trillions of dollars by providing scalable and sustainable revenue models. Despite the surge in AI-driven projects, this essential strategy remains underutilized, leaving substantial potential untapped. <br /> <br />
                        AddOn AI is here to change the game by bridging this gap and introducing innovative monetization solutions tailored specifically for the AI ecosystem. Our platform leverages the proven success of advertising monetization in Web2 and adapts it to meet the unique needs of modern AI agents and social projects. By offering a decentralized, user-friendly environment, AddOn Ai empowers developers and project owners to seamlessly integrate advertising revenue streams, transforming their AI innovations into profitable ventures.</p>
                </div>
            </div>
        </section>
    )
}

export default AddonIntro