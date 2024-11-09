import React from "react";

const ArrowButton: React.FC = () => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute w-full flex flex-col justify-center items-center transition-opacity duration-500 opacity-100"
    >
      <button
        className="z-50 p-2 bg-blue-400 absolute bottom-10"
        onClick={handleClick}
      >
        down arrow
      </button>
    </div>
  );
};
export default ArrowButton;
