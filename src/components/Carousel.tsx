import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Magazines } from "../imports/magazine";
import CarouselElement from "./CarouselElement";

const AutoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through magazines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen w-[90%] md:w-[50vw] flex items-center justify-center">
      <AnimatePresence initial={false} custom={currentIndex}>
        {Magazines.map((magazine, index) =>
          index === currentIndex ? (
            <CarouselElement key={index} magazine={magazine}/>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutoCarousel;
