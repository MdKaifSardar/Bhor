import { useState } from "react";
import { motion } from "framer-motion";
import "./Mag.scss";
import KGECbuilding from "./KGECbuilding";
import Clouds from "./Clouds";
import CloudAnimation from "./CloudAnimation";
import SecondSection from "./SecondSection";
import ArrowButton from "./DownArrow";
import FadeAwayComponent from "./BgFade";
const Mag = () => {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  return (
    <div>
      {/* opening cloud animation */}
      <CloudAnimation />
      <FadeAwayComponent />

      <div>
        <KGECbuilding isEnded={isEnded} setIsEnded={setIsEnded} />
        {isEnded && <Clouds />}
      </div>
      <div className="landscape flex justify-center">
        <div className="w-full h-full flex flex-col gap-8 z-50 items-center">
          <motion.div
            onAnimationComplete={() => {
              setAnimationEnd(true);
            }}
            initial={{ opacity: 0, scale: 0.5, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{
              delay: 10,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="lg:text-4xl md:text-2xl  mt-20 mb-8 font-bold w-[90%] uppercase text1 hidden md:block"
          >
            kalyani government engineering college
          </motion.div>

          <motion.div
            onAnimationComplete={() => {
              setAnimationEnd(true);
            }}
            initial={{ opacity: 0, scale: 0.5, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{
              delay: 12,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="lg:text-4xl md:text-xl text-4xl mt-8 mb-8 font-bold w-[90%]  uppercase text1 md:hidden "
          >
            K.G.E.C
          </motion.div>
        </div>
        {/* sun animation */}
        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <div className="sun"></div>
        </div>
      </div>
      <ArrowButton animationEnd={animationEnd} />
      {animationEnd && <SecondSection />}
    </div>
  );
};

export default Mag;
