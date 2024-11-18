import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import Preloadingpage from "./Preloadingpage";
import Mag from "./components/Mag";
import useImagePreloader from "./utils/hooks/ImagePreloader";
// import PreloadingpageCopy from "./Preloadingpage copy";
import MagazinePage2023 from "./components/MagazinePage2023";
import MagazinePage2024 from "./components/MagazinePage2024";
import Preloadingpage from "./Preloadingpage";
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
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isLoading ? <Preloadingpage/> : <Mag />} />
          {/* <Route path="/" element={isLoading ? <PreloadingpageCopy/> : <Mag />} /> */}
          {/* <Route path="/" element={<Mag />} /> */}
          <Route path="/magazineview2023" element={<MagazinePage2023 />} />
          <Route path="/magazineview2024" element={<MagazinePage2024 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
