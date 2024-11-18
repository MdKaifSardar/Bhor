import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OpenCloudLeft, OpenCLoudRight } from "../imports/hero";

// Import your cloud images
interface CloudAnimationProps {
  setCloudAnim: React.Dispatch<React.SetStateAction<boolean>>;
  delay: number
}

const CloudAnimation = ({ setCloudAnim, delay }: CloudAnimationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const cloudVariants = {
    openLeft: { x: "-100vw" },
    openRight: { x: "100vw" },
    closedLeft: { x: "0vw" },
    closedRight: { x: "0vw" },
  };

  const handleAnimationComplete = () => {
    setCloudAnim(true);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-40">
      {/* Left Cloud Image */}
      <motion.img
        className="absolute left-0 h-screen w-auto lg:w-[60vw] opacity-1"
        src={OpenCloudLeft} // Set to the left cloud image
        initial="closedLeft"
        animate={isOpen ? "openLeft" : "closedLeft"}
        variants={cloudVariants}
        transition={{ duration: 1, ease: "easeOut", delay: delay }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Left Cloud"
      />

      {/* Right Cloud Image */}
      <motion.img
        className="absolute right-0 h-screen w-auto lg:w-[60vw] opacity-1"
        src={OpenCLoudRight} // Set to the right cloud image
        initial="closedRight"
        animate={isOpen ? "openRight" : "closedRight"}
        variants={cloudVariants}
        transition={{ duration: 1, ease: "easeOut", delay: delay }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Right Cloud"
      />
    </div>
  );
};

export default CloudAnimation;
