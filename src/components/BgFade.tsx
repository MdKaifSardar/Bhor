import { motion } from "framer-motion";

const FadeAwayComponent: React.FC = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-black z-50" // Set initial background to black
      initial={{ opacity: 1 }} // Start fully opaque
      animate={{ opacity: 0 }} // Fade out to transparent
      transition={{ duration: 5, ease: "easeInOut" }} // Smooth 5-second transition
    />
  );
};

export default FadeAwayComponent;
