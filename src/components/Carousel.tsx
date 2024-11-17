import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Magazines } from "../imports/magazine";
import CarouselElement from "./CarouselElement";

interface AutoCarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  bhorEnded: boolean;
  hasAppeared: boolean;
}

const AutoCarousel = ({
  setDwnldIsClicked,
  hasAppeared,
  currentIndex,
  setCurrentIndex,
  bhorEnded,
}: AutoCarouselProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for left-to-right, -1 for right-to-left

  useEffect(() => {
    if (isHovered || !hasAppeared || !bhorEnded) return;

    setDirection(1);
    const interval = setInterval(() => {
      setDirection(-1); // Always slide left-to-right for auto transitions
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, bhorEnded, setCurrentIndex, hasAppeared]);

  const handleNext = () => {
    setDirection(-1); // Left-to-right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
  };

  const handlePrev = () => {
    setDirection(1); // Right-to-left
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Magazines.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative overflow-hidden h-screen w-[90%] md:w-[50vw] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        {Magazines.map((magazine, index) =>
          index === currentIndex ? (
            <CarouselElement
              setDwnldIsClicked={setDwnldIsClicked}
              key={index}
              magazine={magazine}
              direction={direction}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="z-[2] absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="z-[2] absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ▶
      </button>
    </div>
  );
};

export default AutoCarousel;
