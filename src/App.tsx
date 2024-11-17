import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Preloadingpage from "./Preloadingpage";
import Mag from "./components/Mag";
import useImagePreloader from "./utils/hooks/ImagePreloader";
import MagazinePage from "./components/MagazinePage";
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
          <Route path="/" element={isLoading ? <Preloadingpage /> : <Mag />} />
          <Route path="/magazineview" element={<MagazinePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
