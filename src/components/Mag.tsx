import { useState } from "react";
import "./Mag.scss";
import KGECbuilding from "./KGECbuilding";
import Clouds from "./Clouds";
import CloudAnimation from "./CloudAnimation";
import SecondSection from "./SecondSection";
import ArrowButton from "./DownArrow";
import FadeAwayComponent from "./BgFade";
import BhorAnimation from "./BhorAnimation";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";
import TextComponent from "./TextComponent";
const Mag = () => {
  const [isEnded, setIsEnded] = useState(false);
  const { smallScreen } = useResponsiveScrollRatio();
  const [allAnimationEnd, setAllAnimationEnd] = useState(false);
  const [bhorEnded, setBhorEnded] = useState(false);
  const [CloudAnim, setCloudAnim] = useState(false);
  return (
    <div>
      <div className="landscape overflow-hidden h-screen w-full z-[-100]">
        <FadeAwayComponent />
        {!CloudAnim ? <CloudAnimation setCloudAnim={setCloudAnim} /> : null}
        <KGECbuilding isEnded={isEnded} setIsEnded={setIsEnded} />
        {isEnded && <Clouds />}
        {isEnded && smallScreen && (
          <div className="h-screen w-full flex felx-col justify-center items-center">
            <BhorAnimation setBhorEnded={setBhorEnded} />
          </div>
        )}
        <TextComponent setAllAnimationEnd={setAllAnimationEnd} />

        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <div className="sun"></div>
        </div>
      </div>
      {allAnimationEnd && (
        <>
          <ArrowButton />
          <div className="z-[100]">
            {" "}
            <SecondSection bhorEnded={bhorEnded} setBhorEnded={setBhorEnded} />
          </div>
        </>
      )}
    </div>
  );
};

export default Mag;
