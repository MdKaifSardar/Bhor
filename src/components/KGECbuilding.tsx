import { motion } from "framer-motion";
import { KGEC } from "../imports/hero"; // Import the image path
import React, { useEffect, useState } from "react";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";

interface KGECbuildingProps {
  setIsEnded: React.Dispatch<React.SetStateAction<boolean>>;
  isEnded: boolean;
}

const KGECbuilding = ({ isEnded, setIsEnded }: KGECbuildingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const { buildingScrollRatio } = useResponsiveScrollRatio();

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
    <div className="absolute h-screen w-full overflow-hidden">
      {isEnded ? (
        <motion.img
          loading="lazy"
          src={KGEC} // Path to the image inside the public folder
          alt="Hero"
          initial={{ y: "100%" }} // Start from below the screen
          animate={{
            y: scrollY * buildingScrollRatio, // Custom parallax speed for index 0
          }}
          transition={{
            damping: 100,
            duration: 0.5,
          }}
          className="absolute z-30 bottom-0 left-0 w-full h-[30vh] sm:h-auto object-cover"
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
          className="absolute z-30 bottom-0 left-0 w-full h-[30vh] sm:h-auto object-cover"
        />
      )}
    </div>
  );
};

export default KGECbuilding;
