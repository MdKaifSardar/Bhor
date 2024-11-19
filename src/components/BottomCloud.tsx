import { motion } from "framer-motion";
import { bottomCloud } from "../imports/hero";

const BottomCloud = () => {
  return (
    <motion.div
      className="z-40 absolute top-[-12vh] lg:top-[-18vh] overflow-hidden w-full h-[30vh] lg:h-auto"
      initial={{
        y: "30%", // Start completely out of view from below
      }}
      animate={{
        y: "0%", // Move into the visible area
      }}
      transition={{
        duration: 3, // Animation duration
        ease: "easeOut", // Smooth easing
      }}
    >
      <motion.img
        src={bottomCloud}
        alt="bottom cloud"
        className="z-[10] w-full h-full object-cover"
        initial={{
          y: "30%", // Start out of view
        }}
        animate={{
          y: "0%", // Move into view
        }}
        transition={{
          duration: 3, // Match the parent duration
          ease: "easeOut",
        }}
      />
      <motion.div
        className="gradient-overlay"
        initial={{
          y: "30%", // Gradient overlay starts out of view as well
        }}
        animate={{
          y: "0%", // Moves into place
        }}
        transition={{
          duration: 3, // Sync with other elements
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default BottomCloud;
