import React from "react";
import { motion } from "framer-motion";

const Sun: React.FC = () => {
  return (
    <div className="absolute top-0 w-full flex flex-col justify-center items-center h-full overflow-hidden z-[20]">
      {/* Sun */}
      <motion.div
        className="absolute w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-yellow-400"
        initial={{
          y: "100vh", // Start off-screen at the bottom
          opacity: 0.2, // Start dim
          boxShadow: "0px 0px 30px 15px rgba(255,223,0,0.3)", // Initial dim glow
        }}
        animate={{
          y: "-100vh", // Move off-screen at the top
          opacity: 1, // Brighten up during the motion
          boxShadow: "0px 0px 80px 40px rgba(255,223,0,0.7)", // Brighter glow
        }}
        transition={{
          delay: 3,
          duration: 12, // Total animation duration in seconds
          ease: "easeInOut", // Smooth easing for a natural effect
        }}
      />
    </div>
  );
};

export default Sun;
