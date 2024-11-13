import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Magazines } from "../imports/magazine";
import CarouselElement from "./CarouselElement";

interface AutoCarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  bhorEnded: boolean; // New prop to control auto-start
  hasAppeared: boolean;
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({
  hasAppeared,
  currentIndex,
  setCurrentIndex,
  bhorEnded,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Automatically cycle through magazines every 5 seconds if isEnded is true and not hovered
  useEffect(() => {
    if (isHovered || !hasAppeared) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, bhorEnded, setCurrentIndex, hasAppeared]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
  };

  const handlePrev = () => {
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
      <AnimatePresence initial={false}>
        {Magazines.map((magazine, index) =>
          index === currentIndex ? (
            <CarouselElement key={index} magazine={magazine} />
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
