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
      className="absolute flex flex-col items-center gap-4 justify-center text-white h-fit w-fit"
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
        className="h-[50vh] sm:h-[50vh] md:h-[60vh] w-auto object-contain"
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
