"use client";

import { Carousel } from "@/components/ui/carousel";
import i1 from '@/app/assets/i1.png'
import i6 from '@/app/assets/i6.png'
import i5 from '@/app/assets/i5.png'
import i7 from '@/app/assets/i7.png'

export function Addon_models() {
    const slideData = [
        {
            title: "Effortless Ad Space Rental",
            button: "Learn More",
            src: i1.src,
            desc: 'Simplifies the process of listing and renting ad spaces on AI agents and social platforms.'
        },
        {
            title: "Comprehensive Revenue Tracking",
            button: "Learn More",
            src: i6.src,
            desc: 'Provides detailed metrics on views, clicks, and overall ad performance.'
        },
        {
            title: "Secure management",
            button: "Learn More",
            src: i5.src,
            desc: 'Utilizes advanced systems to prevent botted interactions, ensuring genuine user engagement.'
        },
        {
            title: "Automated Ad Maangement",
            button: "Learn More",
            src: i7.src,
            desc: 'Streamlines the process of creating, managing, and optimizing ad campaigns through AI-driven automation.'
        },
    ];
    return (
        <div className="h-auto w-full pt-20 bg-black">
            <div className="flex flex-col py-9 justify-center items-center">
                <h5 className="bg-gradient-to-b from-green-700 to-gray-200 bg-clip-text text-center text-xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">Addon AI Models</h5>
                <h1 className="bg-gradient-to-b from-gray-700 pt-6 to-gray-200 bg-clip-text text-center text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">B2B Model</h1>
                <p className="bg-gradient-to-b from-green-700 pt-6 to-gray-200 bg-clip-text text-center text-xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">Monetizing AI Agents and Social Platforms</p>
                <div className="flex gap-10 pt-20">
                    <button className="button">
                        B2B Model
                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clipPath="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <button className="button">
                        B2C Model
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
            <div className="relative overflow-hidden py-20 bg-black ">
                <Carousel slides={slideData} />
            </div>
        </div>
    );
}
