import React from "react";

interface ArrowButtonProps {
  animationEnd: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ animationEnd }) => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`absolute w-full flex flex-col justify-center items-center transition-opacity duration-500 ${
        animationEnd ? "opacity-100" : "opacity-0"
      }`}
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
