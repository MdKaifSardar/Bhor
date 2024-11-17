import { motion, useScroll, useTransform } from "framer-motion";
import {
  BackTrees,
  farTrees,
  frontTrees,
  rocks,
} from "../imports/SecondSection";

const SecondSectionBG = () => {
  const { scrollY } = useScroll();

  // Parallax effect for each layer based on z-index
  const yFarTrees = useTransform(scrollY, [0, 1000], [0, -150]);
  const yBackTrees = useTransform(scrollY, [0, 1000], [0, -250]);
  const yFrontTrees = useTransform(scrollY, [0, 1000], [0, -300]);
  const yRocks = useTransform(scrollY, [0, 1000], [0, -200]);

  // Transition configuration
  const smoothTransition = {damping: 100, duration: 0.5, ease: "easeOut" };

  return (
    <div className="-z-20 w-full h-screen overflow-hidden absolute">
      <motion.img
        src={farTrees}
        alt="Far Trees"
        style={{ y: yFarTrees }}
        transition={smoothTransition}
        className="w-full h-screen absolute bottom-[-15vh] left-0 z-10 object-cover"
      />
      <motion.img
        src={BackTrees}
        alt="Back Trees"
        style={{ y: yBackTrees }}
        transition={smoothTransition}
        className="w-full h-screen absolute bottom-[-25vh] left-0 z-20 object-cover"
      />
      <motion.img
        src={frontTrees}
        alt="Front Trees"
        style={{ y: yFrontTrees }}
        transition={smoothTransition}
        className="w-full h-screen absolute bottom-[-30vh] left-0 z-40 object-cover"
      />
      <motion.img
        src={rocks}
        alt="Rocks"
        style={{ y: yRocks }}
        transition={smoothTransition}
        className="w-full h-screen absolute bottom-[-20vh] left-0 z-10 object-cover"
      />
    </div>
  );
};

export default SecondSectionBG;
