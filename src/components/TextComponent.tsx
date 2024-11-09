import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";
import { motion } from "framer-motion";
interface TextComponentProps {
  setAllAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextComponent = ({ setAllAnimationEnd }: TextComponentProps) => {
  const smallScreen = useResponsiveScrollRatio();
  return (
    <div
      className="w-full ml-auto mr-auto top-20 overflow-hidden absolute h-fit flex flex-col justify-center gap-4 items-center"
      style={{ zIndex: 40 }}
    >
      <motion.div
        onAnimationComplete={() => {
          if (smallScreen) {
            return;
          }
          setAllAnimationEnd(true);
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
        className="lg:text-4xl md:text-2xl text-center font-bold uppercase w-full text1 hidden md:block"
      >
        kalyani government engineering college
      </motion.div>

      <motion.div
        onAnimationComplete={() => {
          setAllAnimationEnd(true);
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
        className="lg:text-4xl md:text-xl text-center text-4xl font-bold uppercase w-full text1 md:hidden"
      >
        K.G.E.C
      </motion.div>
      <div className="h-full w-full flex flex-col justify-center items-center md:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: "100%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{
            delay: 10.7,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-2xl md:text-xl text-center text-md font-bold w-full uppercase text1"
        >
          STUDENTS' UNION
        </motion.div>

        <motion.div
          onAnimationComplete={() => {
            setAllAnimationEnd(true);
          }}
          initial={{ opacity: 0, scale: 0.5, y: "-100%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{
            delay: 11,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-2xl md:text-sm text-center text-md font-md w-full text1"
        >
          presents
        </motion.div>
      </div>
    </div>
  );
};

export default TextComponent;
