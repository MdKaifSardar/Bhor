import { motion } from "framer-motion";
import { cloudsLeft, cloudsRight } from "../imports/hero";
import { useEffect, useState } from "react";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";

const Clouds = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [count, setCount] = useState(0);
  const { cloudScrollRatio } = useResponsiveScrollRatio();

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Handle the completion of the initial cloud animation
  const handleAnimationComplete = () => {
    if (count == 3) {
      setAnimationComplete(true);
      console.log(count);
    } else {
      setCount(count + 1);
      console.log(count);
    }
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {/* Left Clouds */}
      {animationComplete ? (
        <>
          <div className="absolute h-full left-0 w-[50vw]">
            {cloudsLeft.map((Cloud, index) => (
              <motion.img
                loading="lazy"
                key={index}
                src={Cloud.cloud}
                alt="cloud"
                className={`absolute ${Cloud.pos}`}
                style={{ zIndex: Cloud.index, opacity: index === 0 ? 0.8 : 1 }} // Special opacity for index 0
                animate={{
                  y: scrollY * (index === 0 ? cloudScrollRatio : index * cloudScrollRatio), // Custom parallax speed for index 0
                }}
                transition={{
                  damping: 100,
                  duration: 0.5,
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
                style={{ zIndex: Cloud.index, opacity: index === 0 ? 0.8 : 1 }} // Special opacity for index 0
                animate={{
                  y: scrollY * (index === 0 ? cloudScrollRatio : index * cloudScrollRatio), // Custom parallax speed for index 0
                }}
                transition={{
                  damping: 100,
                  duration: 0.5,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <>
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
                onAnimationComplete={handleAnimationComplete} // Trigger after animation completes
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
                  duration: 1,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clouds;
