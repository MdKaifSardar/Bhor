import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import BhorAnimation from "./BhorAnimation";
import AutoCarousel from "./Carousel";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";

const SecondSection: React.FC = () => {
  const [hasAppeared, setHasAppeared] = useState(false); // Track if the animation has already been triggered
  const { smallScreen } = useResponsiveScrollRatio();

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // 50% of the section should be visible
  });

  // Set the state when the section first comes into view
  if (inView && !hasAppeared) {
    setHasAppeared(true);
  }

  return (
    <div
      ref={ref}
      className="bg-black h-screen w-full flex flex-row justify-center items-center"
    >
      {/* Only render BhorAnimation once */}
      {!smallScreen && (
        <div className="h-screen w-[50vw] flex flex-col justify-center items-center">
          {hasAppeared && <BhorAnimation />}
        </div>
      )}
      <AutoCarousel />
    </div>
  );
};

export default SecondSection;
