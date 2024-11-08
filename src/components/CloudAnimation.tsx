import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OpenCloudLeft, OpenCLoudRight } from "../imports/hero";

// Import your cloud images

const CloudAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cloudVariants = {
    openLeft: { x: "-100vw" },
    openRight: { x: "100vw" },
    closedLeft: { x: "0vw" },
    closedRight: { x: "0vw" },
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-50">
      {/* Left Cloud Image */}
      <motion.img
        className="absolute h-full w-[60vw] object-cover opacity-1"
        src={OpenCloudLeft} // Set to the left cloud image
        initial="closedLeft"
        animate={isOpen ? "openLeft" : "closedLeft"}
        variants={cloudVariants}
        transition={{ duration: 1.5, ease: "easeOut", delay: 3 }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Left Cloud"
      />

      {/* Right Cloud Image */}
      <motion.img
        className="absolute h-full w-[60vw] object-cover opacity-1 right-0"
        src={OpenCLoudRight} // Set to the right cloud image
        initial="closedRight"
        animate={isOpen ? "openRight" : "closedRight"}
        variants={cloudVariants}
        transition={{ duration: 1.5, ease: "easeOut", delay: 3 }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Right Cloud"
      />
    </div>
  );
};

export default CloudAnimation;
