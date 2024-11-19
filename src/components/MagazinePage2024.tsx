import { useState } from "react";
import CloudAnimation from "./CloudAnimation";
import MagazinePageBG from "./MagazinePageBG";
import FireflyCanvas from "./FireFlies";
import { motion } from "framer-motion";

const MagazinePage2024 = () => {
  const [cloudAnim, setCloudAnim] = useState(false);
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center relative">
      {cloudAnim ? null : (
        <CloudAnimation delay={0} setCloudAnim={setCloudAnim} />
      )}
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
      <div className="z-[20] ">
        <FireflyCanvas />
      </div>
      <MagazinePageBG />
    </div>
  );
};

export default MagazinePage2024;
