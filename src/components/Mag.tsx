import { useEffect, useState } from "react";
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
import CloudAnimationReverse from "./CloudAnimationReverse";
import { useNavigate } from "react-router-dom";
const Mag = () => {
  const [isEnded, setIsEnded] = useState(false);
  const { smallScreen } = useResponsiveScrollRatio();
  const [allAnimationEnd, setAllAnimationEnd] = useState(false);
  const [bhorEnded, setBhorEnded] = useState(false);
  const [CloudAnim, setCloudAnim] = useState(false);
  const [CloudAnimRev, setCloudAnimRev] = useState(false);
  const [dwnldIsClicked, setDwnldIsClicked] = useState(false);
  const [magNo, setMagNo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (dwnldIsClicked) {
      setCloudAnimRev(true);

      // Redirect to /magazineview after 3 seconds
      const timeoutId = setTimeout(() => {
        if (magNo == 0) {
          navigate("/magazineview2023");
        } else if (magNo == 1) {
          navigate("/magazineview2024");
        }
      }, 1500);

      // Cleanup timeout on component unmount or dependency change
      return () => clearTimeout(timeoutId);
    }
  }, [dwnldIsClicked]);
  return (
    <div>
      <div className="landscape overflow-hidden h-screen w-full z-[-100]">
        <FadeAwayComponent />
        {CloudAnim ? null : (
          <CloudAnimation delay={3} setCloudAnim={setCloudAnim} />
        )}
        {CloudAnimRev ? (
          <CloudAnimationReverse
            setDwnldIsClicked={setDwnldIsClicked}
            setCloudAnimRev={setCloudAnimRev}
          />
        ) : null}
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
          {/* <div className="z-[100]"> */}
          <SecondSection
            setMagNo={setMagNo}
            setDwnldIsClicked={setDwnldIsClicked}
            bhorEnded={bhorEnded}
            setBhorEnded={setBhorEnded}
          />
          {/* </div> */}
        </>
      )}
      {/* <SecondSection
        setDwnldIsClicked={setDwnldIsClicked}
        bhorEnded={bhorEnded}
        setBhorEnded={setBhorEnded}
      /> */}
    </div>
  );
};

export default Mag;
