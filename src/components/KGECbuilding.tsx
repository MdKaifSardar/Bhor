import { motion } from "framer-motion";
import { KGEC } from "../imports/hero"; // Import the image path
import React from "react";

interface KGECbuildingProps {
  setIsEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

const KGECbuilding = ({ setIsEnded }: KGECbuildingProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden">
      <motion.div
        onAnimationComplete={() => {
          setIsEnded(true);
        }}
        initial={{ y: "100%" }} // Start from below the screen (100% of its height)
        animate={{ y: 0 }} // Move to its normal position
        transition={{
          stiffness: 20, // Swift but smooth transition
          damping: 20, // Control the "bounciness"
          duration: 1, // Duration for the animation to complete
          delay: 5.3,
        }}
        className="w-full h-[25vh] sm:h-[50vh] md:h-[50vh] lg:h-auto"
      >
        <img
          src={KGEC} // Path to the image inside the public folder
          alt="Hero"
          className="w-auto h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default KGECbuilding;
