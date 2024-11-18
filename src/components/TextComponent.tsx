import { motion } from "framer-motion";
interface TextComponentProps {
  setAllAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextComponent = ({ setAllAnimationEnd }: TextComponentProps) => {
  return (
    <div
      className="w-full ml-auto mr-auto top-[10%] sm:top-[16%] overflow-hidden absolute h-fit flex flex-col justify-center gap-2 md:gap-4 items-center"
      style={{ zIndex: 40 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        transition={{
          delay: 7.5,
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="text-4xl text-center font-bold uppercase w-full text1 hidden md:block lg:hidden"
      >
        Kalyani Government Engineering College
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        transition={{
          delay: 7.5,
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="text-3xl text-center font-bold uppercase w-full text1 block md:hidden"
      >
        K.G.E.C
      </motion.div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: "100%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{
            delay: 8.5,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-3xl md:text-2xl text-center text-md font-bold w-full uppercase text1"
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
            delay: 9.5,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-2xl md:text-lg text-center text-md font-md w-full text1"
        >
          presents
        </motion.div>
      </div>
    </div>
  );
};

export default TextComponent;
