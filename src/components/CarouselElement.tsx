import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";

interface Magazine {
  index: number;
  year: number;
  title: string;
  image: string;
  url: string;
}

interface CarouselElementProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  magazine: Magazine;
  direction: number; // Direction of animation
}

const CarouselElement = ({ setDwnldIsClicked, magazine, direction }: CarouselElementProps) => {
  return (
    <motion.div
      key={magazine.index}
      className="absolute flex flex-col items-center justify-center gap-5 text-white h-[90%] w-fit"
      initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
      transition={{
        x: { duration: 0.5 },
        opacity: { duration: 0.4 },
      }}
    >

      {/* Magazine Image */}
      <img
        src={magazine.image}
        alt={magazine.title}
        className="md:h-[90%] h-[60%] w-auto object-contain"
      />

      {/* Download Button */}
      <DownloadButton setDwnldIsClicked={setDwnldIsClicked}/>
    </motion.div>
  );
};

export default CarouselElement;
