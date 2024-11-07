import { motion } from "framer-motion";
import { KGEC } from "../imports/hero"; // Import the image path

const KGECbuilding = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden">
      <motion.div
        initial={{ y: "100%" }} // Start from below the screen (100% of its height)
        animate={{ y: 0 }} // Move to its normal position
        transition={{
          // type: "spring",
          stiffness: 20, // Swift but smooth transition
          damping: 20, // Control the "bounciness"
          duration: 2, // Duration for the animation to complete
          delay: .6
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
