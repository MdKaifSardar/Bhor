import { motion, useScroll, useTransform } from "framer-motion";
import {
  BackTrees,
  farTrees,
  frontTrees,
  rocks,
} from "../imports/SecondSection";
const SecindSectionBG = () => {
  const { scrollY } = useScroll();

  // Parallax effect for each layer based on z-index
  const yFarTrees = useTransform(scrollY, [0, 1000], [0, -100]); // Furthest back, moves slowest
  const yBackTrees = useTransform(scrollY, [0, 1000], [0, -150]);
  const yFrontTrees = useTransform(scrollY, [0, 1000], [0, -200]); // Moves faster
  const yRocks = useTransform(scrollY, [0, 1000], [0, -250]); // Closest, moves fastest

  return (
    <div className="-z-20 w-full h-screen overflow-hidden absolute">
      <motion.img
        src={farTrees}
        alt="Far Trees"
        style={{ y: yFarTrees }}
        className="w-full h-screen absolute top-0 left-0 z-10 object-cover"
      />
      <motion.img
        src={BackTrees}
        alt="Back Trees"
        style={{ y: yBackTrees }}
        className="w-full h-screen absolute top-0 left-0 z-20 object-cover"
      />
      <motion.img
        src={frontTrees}
        alt="Front Trees"
        style={{ y: yFrontTrees }}
        className="w-full h-screen absolute top-0 left-0 z-40 object-cover"
      />
      <motion.img
        src={rocks}
        alt="Rocks"
        style={{ y: yRocks }}
        className="w-full h-screen absolute top-0 left-0 z-10 object-cover"
      />
    </div>
  );
};

export default SecindSectionBG;
