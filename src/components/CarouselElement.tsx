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
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
  magazine: Magazine;
  direction: number; // Direction of animation
}

const CarouselElement = ({
  setMagNo,
  setDwnldIsClicked,
  magazine,
  direction,
}: CarouselElementProps) => {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-3 justify-between text-whites h-[70%] sm:h-[100%] w-full"
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
        className="h-[80%] sm:h-[70%] md:h-[90%] w-auto object-contain"
      />

      {/* Download Button */}
      <DownloadButton
        setMagNo={setMagNo}
        magazine={magazine}
        setDwnldIsClicked={setDwnldIsClicked}
      />
    </motion.div>
  );
};

export default CarouselElement;
