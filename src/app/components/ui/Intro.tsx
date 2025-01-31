"use client"

import { use, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "./particles"
import Image from "next/image"
import ether from '@/app/assets/i3.png'
import gitbook from '@/app/assets/i2.png'
import dextools from '@/app/assets/i4.png'
import logo from '@/app/assets/logo.png'



export function Intro() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")



  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="bg-[url(/glow-top2.svg)] z-10 relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl bg-cover bg-no-repeat">
      <section className="text-gray-600 body-font bg-[url(/glow-bottom2.svg)] bg-cover bg-no-repeat w-fit h-2/3 rounded-t-xl ">
        <span className="pointer-events-none whitespace-pre-wrap justify-center flex pt-20 bg-gradient-to-b from-green-900 to-gray-200 bg-clip-text text-center text-7xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Addon Ai
        </span>
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="pointer-events-none whitespace-pre-wrap justify-center pb-7 flex bg-gradient-to-b from-gray-600 to-gray-200 bg-clip-text text-center text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">REVOLUTIONIZING AI & <br /> MONETIZATION</h1>
            <p className="mb-8 leading-relaxed text-2xl font-semibold bg-gradient-to-b from-gray-600 to-gray-200 bg-clip-text text-center text-transparent dark:from-white dark:to-slate-900/10">AddOn AI combines AI and decentralized finance (DeFi) to revolutionize advertising monetization, offering innovative solutions that enhance effectiveness and streamline processes.</p>
            <div className="flex justify-center gap-10">
              <button className="button">
                Monetiser
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="button">
                Agent Creator
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="h-full flex flex-col items-center text-center sm:flex-row lg:flex-col lg:text-left lg:items-start justify-between pt-12">
            <ul className="flex">
              <li className="footer pt-0.5">
                <a className="flex justify-center items-center text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="https://twitter.com/Addon_Ai" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </a>
              </li>
              <li className="mx-2 pt-2 footer">
                <a className="flex justify-center items-center text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="https://etherscan.io/address/0xa579472f17b6E1b6C5dED2A785067a89EC536ce8" aria-label="Github">
                  <svg width="20" height="20" viewBox="0 0 36 36" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3426_74)">
                      <path d="M7.94831 17.2818C7.94826 17.0884 7.98643 16.897 8.06061 16.7184C8.13479 16.5399 8.24352 16.3778 8.38055 16.2413C8.51759 16.1049 8.68022 15.9969 8.85911 15.9235C9.03801 15.8502 9.22963 15.8128 9.42298 15.8137L11.8679 15.8217C12.2577 15.8217 12.6315 15.9766 12.9072 16.2522C13.1828 16.5279 13.3377 16.9018 13.3377 17.2916V26.5365C13.6131 26.4549 13.9663 26.3679 14.3533 26.2771C14.622 26.2139 14.8614 26.0618 15.0328 25.8455C15.2041 25.6292 15.2975 25.3612 15.2975 25.0852V13.6176C15.2975 13.2278 15.4523 12.8538 15.728 12.5781C16.0036 12.3024 16.3775 12.1475 16.7673 12.1474H19.2172C19.607 12.1475 19.981 12.3025 20.2566 12.5782C20.5323 12.8539 20.6871 13.2278 20.6871 13.6176V24.2611C20.6871 24.2611 21.3002 24.0128 21.8978 23.7606C22.1197 23.6668 22.3091 23.5096 22.4423 23.3089C22.5755 23.108 22.6466 22.8724 22.6468 22.6314V9.94236C22.6468 9.74935 22.6847 9.55822 22.7586 9.3799C22.8325 9.20158 22.9407 9.03954 23.0771 8.90306C23.2136 8.76657 23.3757 8.6583 23.5539 8.58443C23.7323 8.51055 23.9234 8.47251 24.1163 8.4725H26.5662C26.956 8.4725 27.33 8.62736 27.6056 8.90301C27.8813 9.17865 28.0361 9.55252 28.0363 9.94236V20.3912C30.16 18.8519 32.3125 17.0007 34.0206 14.7746C34.2685 14.4514 34.4325 14.072 34.498 13.6701C34.5635 13.2682 34.5284 12.8563 34.3961 12.4712C33.2404 9.10293 31.0725 6.17389 28.1888 4.08454C25.3052 1.99518 21.8465 0.847511 18.286 0.798444C8.68435 0.669463 0.74914 8.50728 0.750083 18.11C0.740655 21.1487 1.53373 24.1359 3.04911 26.7697C3.2581 27.1301 3.56555 27.4232 3.93534 27.6147C4.30515 27.8063 4.72194 27.8883 5.13676 27.8512C5.71305 27.8 6.28859 27.7402 6.86315 27.6722C7.16171 27.6383 7.43734 27.4957 7.63757 27.2716C7.83777 27.0475 7.94858 26.7577 7.94888 26.4573L7.94831 17.2818Z" className="fill-current"></path>
                      <path d="M7.89855 32.11C10.4808 33.9885 13.5323 35.1161 16.7156 35.3679C19.8988 35.6197 23.0898 34.9862 25.9352 33.5371C28.7807 32.088 31.1699 29.8802 32.8384 27.1575C34.507 24.4348 35.3898 21.3038 35.3894 18.1106C35.3894 17.7119 35.3709 17.3177 35.3442 16.9258C29.0198 26.3577 17.3428 30.7673 7.89855 32.11Z" className="fill-current"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3426_74">
                        <rect width="34.6358" height="34.6358" className="fill-current" transform="translate(0.75 0.792969)"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                </a>
              </li>
              <li className="ml-2 pt-2 footer">
                <a className="flex justify-center items-center text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="https://addon-ai.gitbook.io" aria-label="Telegram">
                  <svg width="20" height="19" viewBox="0 0 36 33" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <g id="Link â†’ SVG" clip-path="url(#clip0_3426_68)">
                      <path id="Vector" d="M15.1681 17.5831C16.8355 18.5454 17.6691 19.0266 18.5848 19.0275C19.5003 19.0282 20.3349 18.5485 22.0039 17.5891L32.6432 11.4733C33.1235 11.1972 33.4196 10.6855 33.4196 10.1315C33.4196 9.57745 33.1235 9.06571 32.6432 8.78963L22 2.6716C20.3329 1.71321 19.4992 1.23402 18.5845 1.23438C17.6698 1.23473 16.8365 1.71458 15.1701 2.67427L6.02049 7.94317C5.95267 7.98224 5.91878 8.0018 5.88716 8.02028C2.76175 9.84991 0.830767 13.1902 0.804949 16.8116C0.804687 16.8483 0.804688 16.8874 0.804688 16.9656C0.804688 17.0438 0.804687 17.0829 0.804947 17.1195C0.830711 20.7369 2.75738 24.074 5.87723 25.905C5.90875 25.9236 5.94265 25.9431 6.01032 25.9822L11.7416 29.2912C15.0812 31.2194 16.751 32.1834 18.5846 32.1842C20.4183 32.1847 22.0888 31.2219 25.4297 29.2958L31.4798 25.8081C33.1526 24.8438 33.9891 24.3617 34.4484 23.5668C34.9076 22.7717 34.9076 21.8064 34.9076 19.8755V16.1453C34.9076 15.6096 34.6176 15.116 34.1495 14.8553C33.6967 14.6031 33.1447 14.6068 32.6953 14.8652L20.2894 21.9965C19.4572 22.4749 19.041 22.7142 18.5842 22.7143C18.1276 22.7144 17.7112 22.4755 16.8785 21.9975L8.48199 17.1776C8.0614 16.9362 7.85108 16.8155 7.68216 16.7937C7.29707 16.744 6.92678 16.9597 6.78009 17.3192C6.71576 17.4769 6.71705 17.7194 6.71966 18.2044C6.72158 18.5615 6.72253 18.74 6.7559 18.9041C6.83066 19.2719 7.02408 19.6047 7.30655 19.8518C7.43268 19.9622 7.58726 20.0514 7.89653 20.2299L16.8738 25.4111C17.7086 25.893 18.126 26.1339 18.5844 26.134C19.0427 26.1342 19.4602 25.8934 20.2954 25.4121L31.2989 19.0693C31.584 18.9048 31.7268 18.8227 31.8337 18.8844C31.9405 18.9462 31.9405 19.1109 31.9405 19.4401V21.132C31.9405 21.6148 31.9405 21.8561 31.8258 22.0548C31.7109 22.2535 31.5018 22.374 31.0836 22.6152L22.0078 27.8468C20.3369 28.8099 19.5016 29.2915 18.5845 29.2911C17.6675 29.2906 16.8325 28.8083 15.1626 27.8436L6.67145 22.9387C6.64447 22.9231 6.63099 22.9153 6.61842 22.908C4.83804 21.8676 3.73948 19.9644 3.72918 17.9022C3.7291 17.8877 3.7291 17.8722 3.7291 17.841V16.2879C3.7291 15.1496 4.33537 14.0974 5.32023 13.5265C6.19048 13.0221 7.26392 13.0211 8.1351 13.5239L15.1681 17.5831Z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3426_68">
                        <rect width="34.6358" height="31.7495" className="fill-current" transform="translate(0.570312 0.792969)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="ml-2 footer">
                <a className="flex justify-center items-center text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="https://t.me/Addon_Ai" aria-label="Telegram">
                  <svg className="fill-current" width="36" height="36" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C11.5806 8 8 11.5806 8 16C8 20.4194 11.5806 24 16 24C20.4194 24 24 20.4194 24 16C24 11.5806 20.4194 8 16 8ZM19.7097 13.4419C19.5903 14.7065 19.0677 17.7774 18.8032 19.1935C18.6903 19.7935 18.471 19.9935 18.2581 20.0129C17.7935 20.0548 17.4419 19.7065 16.9903 19.4097C16.2871 18.9484 15.8871 18.6613 15.2065 18.2097C14.4161 17.6903 14.929 17.4032 15.3774 16.9355C15.4968 16.8129 17.5419 14.9516 17.5806 14.7839C17.5871 14.7613 17.5903 14.6839 17.5419 14.6419C17.4935 14.6 17.4258 14.6161 17.3774 14.6258C17.3065 14.6409 16.1817 15.3839 14.0032 16.8548C13.6849 17.0742 13.3957 17.1806 13.1355 17.1742C12.8484 17.1677 12.3 17.0129 11.8903 16.8806C11.3903 16.7194 10.9903 16.6323 11.0258 16.3548C11.043 16.2108 11.2419 16.0634 11.6226 15.9129C13.9538 14.8978 15.5086 14.228 16.2871 13.9032C18.5097 12.9806 18.971 12.8194 19.271 12.8129C19.3387 12.8129 19.4839 12.829 19.5806 12.9065C19.6438 12.962 19.6841 13.039 19.6935 13.1226C19.711 13.2281 19.7164 13.3352 19.7097 13.4419Z"></path>
                  </svg>
                </a>
              </li>
              <li className="ml-2 footer pt-2">
                <a className="flex justify-center items-center text-green-500 hover:text-green-400 transition duration-150 ease-in-out" href="dextools.io/app/en/ether/pair-explorer/0xa579472f17b6E1b6C5dED2A785067a89EC536ce8" aria-label="Telegram">
                  <svg width="20" height="22" viewBox="0 0 33 35" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <g id="Link â†’ SVG" clip-path="url(#clip0_3426_72)">
                      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M13.0613 2.05949C10.7523 3.21401 9.30912 4.07991 9.30912 4.07991C9.30912 4.07991 14.2159 6.6776 14.5045 6.6776L15.6591 6.10033L16.8136 5.52307L17.9681 6.10033L19.1226 6.6776L21.4317 5.8117C24.6066 4.36854 24.8953 4.36854 24.8953 4.36854C24.8953 4.36854 23.7407 3.79128 20.8544 2.05949C19.4113 1.19359 17.9681 0.616326 17.6795 0.327694C17.1022 0.0390625 16.8136 0.0390625 16.8136 0.0390625C16.8136 0.0390625 15.0818 0.904958 13.0613 2.05949ZM3.82512 6.6776L1.80469 7.83212V17.6456L4.11375 16.4911L6.4228 15.3366V10.4298L7.57733 11.0071C8.44323 11.5843 9.30912 11.873 10.175 12.4502L11.6182 13.3161L12.1954 13.0275C12.4841 12.7389 13.0613 12.7389 13.35 12.4502L15.0818 11.5843L16.2363 11.0071C16.2363 11.0071 15.0818 10.1412 11.3295 8.40939L6.13417 5.8117C6.13417 5.8117 4.97964 6.10033 3.82512 6.6776ZM25.1839 6.96623C23.4521 7.54349 22.2976 8.12076 22.2976 8.12076L24.0294 9.27528L25.7612 10.4298C25.7612 10.4298 24.8953 11.0071 23.7407 11.2957C22.8749 11.873 20.2772 13.0275 17.9681 13.8934L10.7523 17.357C8.73186 18.2229 7.2887 18.8001 7.00007 19.0888C3.24785 20.8206 2.09332 21.1092 2.09332 21.3978C2.09332 21.3978 1.80469 21.9751 1.80469 24.2841V27.1705L3.82512 28.0364L5.84554 28.9023L8.15459 27.7477L11.0409 26.5932C11.0409 26.5932 10.7523 26.3046 10.4636 26.3046L8.73186 25.4387C8.15459 25.15 7.86596 24.8614 7.57733 24.8614H7.2887C7.2887 24.8614 8.44323 24.2841 9.88639 23.7069C12.7727 22.5523 14.7931 21.3978 19.4113 19.3774C21.4317 18.5115 23.4521 17.6456 25.4725 16.4911C27.2043 15.6252 29.2248 14.7593 30.0906 14.4707L31.5338 13.8934V8.12076L29.5134 7.25486C28.6475 6.10033 27.7816 5.8117 27.7816 5.8117C27.7816 5.8117 26.6271 6.38896 25.1839 6.96623ZM31.2452 17.357C30.9565 17.357 30.3793 17.6456 30.0906 17.9342C29.802 18.2229 28.9361 18.5115 28.3589 18.8001L27.2043 19.3774V24.5728C27.2043 24.5728 25.1839 23.7069 23.4521 22.5524C22.009 21.6865 22.009 21.6865 21.7203 21.6865C21.4317 21.6865 20.5658 22.2637 19.4113 22.841C17.9681 23.4182 17.1022 23.7069 17.1022 23.9955C17.1022 23.9955 19.4113 25.15 22.2976 26.8818L27.493 29.4795L29.802 28.325L32.1111 27.1705V17.357C31.8224 17.0683 31.5338 17.357 31.2452 17.357ZM19.1226 28.6136C18.5454 28.9023 18.2567 28.9023 17.9681 29.1909C16.8136 29.7681 16.8136 29.7681 15.6591 28.9023C14.5045 28.6136 14.2159 28.325 14.2159 28.325L11.9068 29.4795C10.7523 30.0568 9.59775 30.3454 9.59775 30.3454C9.02049 30.3454 9.88639 30.9227 13.35 32.6545L16.8136 34.6749L18.5454 33.809C19.4113 33.2317 21.1431 32.3658 22.5862 31.7886C24.0294 31.2113 24.8953 30.634 24.8953 30.634L22.5862 29.4795L19.9885 28.325L19.1226 28.6136Z" className="fill-current"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3426_72">
                        <rect width="31.7495" height="34.6358" className="fill-current" transform="translate(0.9375 0.0390625)"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
