import { useState, useEffect } from "react";

import Preloadingpage from "./Preloadingpage";
import Mag from "./components/Mag";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloadingpage/>
      ) : (
        <Mag />
      )}
    </>
  );
}

export default App;
