import { motion } from "framer-motion";
import { KGEC } from "../imports/hero"; // Import the image path
import React, { useEffect, useState } from "react";
import useResponsiveScrollRatio from "../hooks/parallaxRatio";

interface KGECbuildingProps {
  setIsEnded: React.Dispatch<React.SetStateAction<boolean>>;
  isEnded: boolean;
}

const KGECbuilding = ({ isEnded, setIsEnded }: KGECbuildingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const scrollRatio = useResponsiveScrollRatio();

  const handleAnimationComplete = () => {
    setIsEnded(true);
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden">
      {isEnded ? (
        <motion.img
          loading="lazy"
          src={KGEC} // Path to the image inside the public folder
          alt="Hero"
          initial={{ y: "100%" }} // Start from below the screen
          animate={{
            y: scrollY * scrollRatio, // Custom parallax speed for index 0
          }}
          transition={{
            damping: 100,
            duration: 0.5,
          }}
          className="w-full h-[25vh] sm:h-[50vh] md:h-[50vh] lg:h-auto object-cover"
        />
      ) : (
        <motion.img
          src={KGEC} // Path to the image inside the public folder
          alt="Hero"
          onAnimationComplete={handleAnimationComplete}
          initial={{ y: "100%" }} // Start from below the screen (100% of its height)
          animate={{ y: 0 }} // Move to its normal position
          transition={{
            stiffness: 20, // Swift but smooth transition
            damping: 20, // Control the "bounciness"
            duration: 1.7, // Duration for the animation to complete
            delay: 3.8,
          }}
          className="w-full h-[25vh] sm:h-[50vh] md:h-[50vh] lg:h-auto object-cover"
        />
      )}
    </div>
  );
};

export default KGECbuilding;
