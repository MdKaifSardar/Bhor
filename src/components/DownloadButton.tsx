import { motion } from "framer-motion";

interface DownloadButtonProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DownloadButton = ({ setDwnldIsClicked }: DownloadButtonProps) => {
  return (
    <motion.button
      onClick={() => setDwnldIsClicked(true)}
      className="relative py-1 px-2 text-lg font-semibold rounded-full text-white bg-transparent overflow-hidden focus:outline-none"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <span className="relative z-10">Download</span>

      {/* Animated Gradient Shadow */}
      <motion.div
        className="absolute bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default DownloadButton;
