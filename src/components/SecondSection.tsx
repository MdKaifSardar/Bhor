import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BhorAnimation from "./BhorAnimation";
import AutoCarousel from "./Carousel";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";
import FireflyCanvas from "./FireFlies";
import BhorSvgFirst from "./BhorSvgs/BhorSvgFirst";
import BhorSvgSecond from "./BhorSvgs/BhorSvgSecond";
import SecindSectionBG from "./SecondSectionBg";
import { motion } from "framer-motion";
import useImagePreloader from "../utils/hooks/ImagePreloader";
import { bottomCloud } from "../imports/hero";

interface SecondSectionProps {
  bhorEnded: boolean;
  setBhorEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSection = ({
  setMagNo,
  setDwnldIsClicked,
  bhorEnded,
  setBhorEnded,
}: SecondSectionProps) => {
  const [hasAppeared, setHasAppeared] = useState(false); // Track if the animation has already been triggered
  const { smallScreen } = useResponsiveScrollRatio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  const PreloadBigClouds = useImagePreloader();

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // 50% of the section should be visible
  });

  // Set the state when the section first comes into view
  if (inView && !hasAppeared) {
    setHasAppeared(true);
  }

  useEffect(() => {
    if (currentIndex !== 0) {
      setHasChanged(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    PreloadBigClouds();
  }, []);

  return (
    <div
      ref={ref}
      className="h-screen w-full flex flex-row justify-center items-center relative"
    >
      <div className="z-40 absolute top-[-12vh] lg:top-[-18vh] overflow-hidden w-full h-[30vh] lg:h-auto">
        <img
          src={bottomCloud}
          alt="bottom cloud"
          className="z-[10] w-full h-full object-cover"
        />
        <div className="gradient-overlay"/>
      </div>
      <SecindSectionBG />
      <div className="h-full w-full absolute overflow-hidden ">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-60%" }}
          transition={{
            duration: 15,
            delay: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className=" main-gradient -z-40 absolute bottom-0  flex justify-center items-center"
        />
      </div>
      <div className="-z-10 ">
        <FireflyCanvas />
      </div>
      {!smallScreen && (
        <div className="h-screen w-[50vw] flex flex-col justify-center items-center">
          {hasAppeared && !bhorEnded ? (
            <BhorAnimation setBhorEnded={setBhorEnded} />
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 1 }}
              animate={hasChanged ? { opacity: [0, 1] } : { opacity: 1 }}
              transition={{ duration: 3.2 }}
            >
              {currentIndex == 0 ? <BhorSvgFirst /> : <BhorSvgSecond />}
            </motion.div>
          )}
        </div>
      )}
      <div className="pt-0 lg:pt-[14vh] h-screen w-fit">
        <AutoCarousel
          setMagNo={setMagNo}
          setDwnldIsClicked={setDwnldIsClicked}
          hasAppeared={hasAppeared}
          bhorEnded={bhorEnded}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default SecondSection;
