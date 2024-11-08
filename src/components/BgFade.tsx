import { motion } from "framer-motion";

const FadeAwayComponent: React.FC = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-black z-50"
      initial={{ opacity: 1 }} // Full opacity at the beginning (black background)
      animate={{ opacity: 0 }} // Fade to opacity 0 (nothing)
      transition={{ duration: 5 }} // Duration of the fade-out effect (3 seconds)
    />
  );
};

export default FadeAwayComponent;
