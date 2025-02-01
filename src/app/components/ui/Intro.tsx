import { ParticlesDemo } from "./particle-effect";

export function Intro() {
  return (
    <div className="bg-[url(/glow-top2.svg)] z-10 relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8">
      <section className="text-gray-600 body-font bg-[url(/glow-bottom2.svg)] bg-cover bg-no-repeat w-full max-w-5xl h-auto md:h-full md:bottom-9 relative rounded-t-xl flex flex-col items-center text-center py-10">
        <span className="pointer-events-none whitespace-pre-wrap justify-center flex pt-10 sm:pt-20 bg-gradient-to-b from-green-900 to-gray-200 bg-clip-text text-4xl sm:text-7xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Addon AI
        </span>
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="pointer-events-none whitespace-pre-wrap justify-center pb-7 flex bg-gradient-to-b from-gray-600 to-gray-200 bg-clip-text text-center text-3xl sm:text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              REVOLUTIONIZING AI & <br className="hidden sm:block" /> MONETIZATION
            </h1>
            <p className="mb-8 leading-relaxed text-lg sm:text-2xl font-semibold bg-gradient-to-b from-gray-600 to-gray-200 bg-clip-text text-center text-transparent dark:from-white dark:to-slate-900/10">
              AddOn AI combines AI and decentralized finance (DeFi) to revolutionize advertising monetization, offering innovative solutions that enhance effectiveness and streamline processes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <button className="button w-fit sm:w-auto">
                Monetiser
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipPath="evenodd"></path>
                </svg>
              </button>
              <button className="button w-fit sm:w-auto">
                Agent Creator
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipPath="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="h-full flex flex-col items-center text-center sm:flex-row lg:flex-col lg:text-left lg:items-start justify-between pt-12">
            <ul className="flex flex-wrap justify-center gap-4">
              <li className="footer">
                <a className="text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="https://twitter.com/Addon_Ai" aria-label="Twitter">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ParticlesDemo />
    </div>
  );
}
