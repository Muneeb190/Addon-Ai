"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  desc: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center md:pl-24 relative text-start text-white opacity-100 transition-all duration-300 ease-in-out w-[60vmin] h-[40vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-800 to-gray rounded-[5%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            className="absolute inset-0 ml-3 mt-3 md:mt-6 w-[15%] transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
            width={200}
            height={200}
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>


        <article
          className={`relative p-4 sm:p-[4vmin] mt-[100] sm:mt-[120] md:mt-[50px] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <h2 className="text-sm sm:text-md md:text-xl lg:text-2xl font-semibold ml-[10] line-clamp-2">
            <div className="ml-6">{title}</div>
            <div className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6 bg-gradient-to-t from-gray-600 to-gray-200 bg-clip-text text-center font-bold leading-tight text-transparent dark:from-white dark:to-slate-900/10 line-clamp-3">
              {slide.desc}
            </div>
          </h2>
          <div className="flex justify-center mt-4 sm:mt-6">
            <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-white rounded-md bg-green-600 hover:bg-green-700 transition duration-200 shadow-md">
              {button}
            </button>
          </div>
        </article>

      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 md:mt-28 flex items-center mx-2 justify-center bg-gradient-to-l from-green-400 to-gray dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
        }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-white dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

// ... (all previous imports and interfaces remain the same)

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div
      className="relative w-[60vmin] h-[70vmin] mx-auto mt-16 md:mt-24" // Added margin top here
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center  w-full top-[calc(70%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

