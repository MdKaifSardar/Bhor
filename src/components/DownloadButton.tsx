import { motion } from "framer-motion";

interface DownloadButtonProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DownloadButton = ({ setDwnldIsClicked }: DownloadButtonProps) => {
  return (
    <motion.button
      onClick={() => setDwnldIsClicked(true)}
      className="relative py-1 px-2 text-lg font-semibold rounded-full text-white bg-transparent overflow-hidden focus:outline-none shadow-[0px_5px_30px_rgba(255,255,255,0.6)] hover:shadow-[0px_5px_30px_rgba(255,255,255,0.8)] transition-all duration-400"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, .6)", // Slowly turn inside white
        color: "white", // Make the text transparent
        transition: { duration: 0.1 },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <span className="relative z-10">Download</span>
    </motion.button>
  );
};

export default DownloadButton;
