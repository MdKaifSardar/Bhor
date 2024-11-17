import { allClouds, bigClouds } from "../../imports/hero";
import {} from "../../imports/hero";

const useImagePreloader = () => {
  // Define the function inside the hook
  const preloadImages = () => {
    allClouds.forEach(({ cloud }) => {
      const img = new Image(); // Create a new Image instance
      img.src = cloud; // Set the image source to preload
    });
  };

  // Return the function so it can be used elsewhere
  return preloadImages;
};

const PreloadBigClouds = () => {
  const preloadImages = () => {
    bigClouds.forEach(({ cloud }) => {
      const img = new Image(); // Create a new Image instance
      img.src = cloud; // Set the image source to preload
    });
  };

  // Return the function so it can be used elsewhere
  return { preloadImages, PreloadBigClouds };
};

export default useImagePreloader;
