import { motion } from "framer-motion";
import { useState } from "react";
import DownloadButton from "./DownloadButton";

interface Magazine {
  index: number;
  year: number;
  title: string;
  image: string;
  url: string;
}

interface CarouselElementProps {
  magazine: Magazine;
}
const CarouselElement = ({ magazine }: CarouselElementProps) => {
  const [clicked, setClicked] = useState(false);

  const handleDownloadClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Reset click indicator after 500ms
  };
  return (
    <motion.div
      key={magazine.index}
      className="absolute flex flex-col items-center justify-center gap-5 text-white h-[90%] w-fit"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{
        x: { type: "spring", damping: 30 },
        opacity: { duration: 0.4 },
      }}
    >
      {/* Magazine Title */}
      <div className="text-xl font-bold">{magazine.title}</div>

      {/* Magazine Image */}
      <img
        src={magazine.image}
        alt={magazine.title}
        className="h-[80%] w-auto object-contain"
      />

      {/* Download Button */}
      <DownloadButton
        // onClick={handleDownloadClick}
        // className={`px-4 py-2 rounded ${
        //   clicked ? "bg-green-500" : "bg-blue-500"
        // } hover:bg-blue-600`}
      >
        {/* {clicked ? "Downloading..." : "Download"} */}
      </DownloadButton>
    </motion.div>
  );
};

export default CarouselElement;
