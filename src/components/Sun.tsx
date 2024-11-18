import React from "react";
import { motion } from "framer-motion";

const Sun: React.FC = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden flex justify-center items-center">
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
          delay: 4,
          duration: 8, // Total animation duration in seconds
          ease: "easeInOut", // Smooth easing for a natural effect
        }}
      />
    </div>
  );
};

export default Sun;
