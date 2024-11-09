import { useState, useEffect } from "react";

import Preloadingpage from "./Preloadingpage";
import Mag from "./components/Mag";
import useImagePreloader from "./utils/hooks/ImagePreloader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const preloadImages = useImagePreloader();

  useEffect(() => {
    preloadImages();
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading ? <Preloadingpage /> : <Mag />}
      {/* <Mag /> */}
    </>
  );
}

export default App;
