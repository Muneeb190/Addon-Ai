import React from 'react';

export const Doc = () => {
  return (
    <div className='h-auto w-full relative bg-black px-4 md:pt-60'>
      <div className='relative md:bottom-52 bottom-0'>
        <div className='flex flex-col py-9 justify-center items-center text-center'>
          <h5 className='bg-gradient-to-b from-green-700 to-gray-200 bg-clip-text text-lg md:text-xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Empowered by Addon AI
          </h5>
          <h1 className='bg-gradient-to-t mt-3 from-gray-700 pt-6 to-gray-200 bg-clip-text text-4xl md:text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Harness the Full Potential of Your AI <br className='hidden md:block' /> Infrastructure
          </h1>
          <p className='bg-gradient-to-b mt-3 from-green-700 pt-6 to-gray-200 bg-clip-text text-base md:text-xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            Simplify AI deployment with a seamless dashboard for managing GPUs, workloads, and <br className='hidden md:block' /> agents effortlessly.
          </p>
        </div>

        <div className='relative group flex justify-center p-4'>
          <button className='relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 w-full max-w-xs md:max-w-md'>
            <span className='absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
            <span className='relative z-10 block px-4 md:px-6 py-3 rounded-xl bg-gray-950 text-sm md:text-base'>
              <div className='relative z-10 flex items-center justify-center space-x-2'>
                <span className='transition-all duration-500 group-hover:translate-x-1'>
                  Explore Documentation
                </span>
                <svg
                  className='w-5 md:w-6 h-5 md:h-6 transition-transform duration-500 group-hover:translate-x-1'
                  data-slot='icon'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
