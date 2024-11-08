import { motion } from "framer-motion";
import { cloudsLeft, cloudsRight } from "../imports/hero";
import { useEffect } from "react";

const Clouds = () => {
  useEffect(() => {
    // Preload images for both cloudsLeft and cloudsRight
    const allClouds = [...cloudsLeft, ...cloudsRight]; // Combine both arrays

    allClouds.forEach(({ cloud }) => {
      const img = new Image(); // Create a new Image instance
      img.src = cloud; // Set the image source to preload
    });
  }, []);
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {/* Left Clouds */}
      <div className="absolute h-full left-0 w-[50vw]">
        {cloudsLeft.map((Cloud, index) => (
          <motion.img
            loading="lazy"
            key={index}
            src={Cloud.cloud}
            alt="cloud"
            className={`absolute ${Cloud.pos}`}
            style={{ zIndex: Cloud.index }}
            initial={{ x: "-50vw", opacity: 1 }} // Start just off-screen on the left
            animate={{ x: 0 }}
            transition={{
              damping: 100, // Higher damping for softer settling
              delay: index * 1, // Slight delay between clouds
              duration: 1,
            }}
          />
        ))}
      </div>

      {/* Right Clouds */}
      <div className="absolute h-full right-0 w-[50vw]">
        {cloudsRight.map((Cloud, index) => (
          <motion.img
            loading="lazy"
            key={index}
            src={Cloud.cloud}
            alt="cloud"
            className={`absolute ${Cloud.pos}`}
            style={{ zIndex: Cloud.index }}
            initial={{ x: "50vw", opacity: 1 }} // Start just off-screen on the right
            animate={{ x: 0 }}
            transition={{
              damping: 100, // Higher damping for softer settling
              delay: index * 1, // Slight delay between clouds
              duration: 1, // Randomized duration for each cloud
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clouds;
