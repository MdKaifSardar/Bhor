import { useEffect, useState } from "react";

const useResponsiveScrollRatio = () => {
  const [scrollRatio, setScrollRatio] = useState(0.3); // Default value

  const updateScrollRatio = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      // lg and up
      setScrollRatio(0.4); // Set desired ratio for large screens
    } else if (width >= 768) {
      // md and up
      setScrollRatio(0.3); // Set desired ratio for medium screens
    } else if (width >= 640) {
      // sm and up
      setScrollRatio(0.2); // Set desired ratio for small screens
    } else {
      // Smaller than sm
      setScrollRatio(0.1); // Set desired ratio for extra small screens
    }
  };

  useEffect(() => {
    // Set initial scroll ratio on load
    updateScrollRatio();

    // Listen for window resize events
    window.addEventListener("resize", updateScrollRatio);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScrollRatio);
    };
  }, []);

  return scrollRatio;
};

export default useResponsiveScrollRatio;
