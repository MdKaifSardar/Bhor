import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OpenCloudLeft, OpenCLoudRight } from "../imports/hero";

interface CloudAnimationProps {
  setCloudAnimRev: React.Dispatch<React.SetStateAction<boolean>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CloudAnimationReverse = ({ setCloudAnimRev, setDwnldIsClicked }: CloudAnimationProps) => {
  const [phase, setPhase] = useState<"open" | "closing" | "closed" | "opening">(
    "open"
  );

  const cloudVariants = {
    openLeft: { x: "-100vw" },
    openRight: { x: "100vw" },
    closedLeft: { x: "0vw" },
    closedRight: { x: "0vw" },
  };

  const handleAnimationComplete = () => {
    if (phase === "closing") {
      // Move to the "closed" phase
      setPhase("closed");
      setTimeout(() => {
        setPhase("opening"); // Trigger the "opening" animation after 2 seconds
      }, 2000);
    } else if (phase === "opening") {
      // Animation sequence complete; reset CloudAnimRev
      setCloudAnimRev(false);
      setDwnldIsClicked(false);
    }
  };

  useEffect(() => {
    // Start the animation by moving to the "closing" phase
    setPhase("closing");
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-40">
      {/* Left Cloud */}
      <motion.img
        className="absolute left-0 h-screen w-auto lg:w-[60vw] opacity-1"
        src={OpenCloudLeft}
        initial="openLeft"
        animate={
          phase === "closing"
            ? "closedLeft"
            : phase === "opening"
            ? "openLeft"
            : "closedLeft"
        }
        variants={cloudVariants}
        transition={{ duration: 2, ease: "easeOut" }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Left Cloud"
      />

      {/* Right Cloud */}
      <motion.img
        className="absolute right-0 h-screen w-auto lg:w-[60vw] opacity-1"
        src={OpenCLoudRight}
        initial="openRight"
        animate={
          phase === "closing"
            ? "closedRight"
            : phase === "opening"
            ? "openRight"
            : "closedRight"
        }
        variants={cloudVariants}
        transition={{ duration: 2, ease: "easeOut" }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50, willChange: "transform" }}
        alt="Right Cloud"
      />
    </div>
  );
};

export default CloudAnimationReverse;
