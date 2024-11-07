import { motion } from "framer-motion";
import { cloudsLeft, cloudsRight } from "../imports/hero";

const Clouds = () => {
  // Function to generate random duration for each cloud
  // const getRandomDuration = () => {
  //   return Math.random() * 5 + 15; // Random duration between 15 and 20 seconds
  // };

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {/* Left Clouds */}
      <div className="absolute h-full left-0 w-[50vw]">
        {cloudsLeft.map((Cloud, index) => (
          <motion.img
            key={index}
            src={Cloud.cloud}
            alt="cloud"
            className={`absolute ${Cloud.pos}`}
            style={{ zIndex: Cloud.index }}
            initial={{ x: "-50vw", opacity: 1 }} // Start just off-screen on the left
            animate={{ x: 0 }} // Move to the final position
            transition={{
              stiffness: 5, // Lower stiffness for smoother transition
              damping: 30, // Higher damping for softer settling
              delay: index * 2.1, // Slight delay between clouds
              duration: 3, // Randomized duration for each cloud
            }}
          />
        ))}
      </div>

      {/* Right Clouds */}
      <div className="absolute h-full right-0 w-[50vw]">
        {cloudsRight.map((Cloud, index) => (
          <motion.img
            key={index}
            src={Cloud.cloud}
            alt="cloud"
            className={`absolute ${Cloud.pos}`}
            style={{ zIndex: Cloud.index }}
            initial={{ x: "50vw", opacity: 1 }} // Start just off-screen on the right
            animate={{ x: 0 }} // Move to the final position
            transition={{
              stiffness: 5, // Lower stiffness for smoother transition
              damping: 30, // Higher damping for softer settling
              delay: index * 2.1, // Slight delay between clouds
              duration: 2, // Randomized duration for each cloud
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clouds;
