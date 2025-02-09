import React from 'react';

export const Doc = () => {
  return (
    <div id='Doc' className='h-auto w-full relative bg-black px-4 md:pt-12 pb-24'>
      <div className='relative bottom-0'>
        <div className='flex flex-col py-9 justify-center items-center text-center'>
          <h5 className='bg-gradient-to-b from-green-700 to-gray-200 bg-clip-text text-lg md:text-xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Empowered by Addon AI
          </h5>
          <h1 className='bg-gradient-to-t mt-3 from-gray-700 pt-6 to-gray-200 bg-clip-text text-4xl md:text-5xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Harness the Full Potential of <br className='hidden md:block' />Your AI Infrastructure
          </h1>
          <p className='bg-gradient-to-b mt-3 from-green-700 pt-6 to-gray-200 bg-clip-text text-base md:text-lg font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Simplify AI deployment with a seamless dashboard for managing GPUs, workloads, and <br className='hidden md:block' /> agents effortlessly.
          </p>
        </div>

        <div className='relative group flex justify-center p-'>
          <div className="inline-flex relative before:absolute before:inset-0 before:bg-green-500 before:blur-md">
            <a className="btn-sm py-3 px-6 text-green fill-green-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="https://addon-ai.gitbook.io/addon-ai">
              <span className="relative text-white inline-flex items-center">
                Explore Documentation
                <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
