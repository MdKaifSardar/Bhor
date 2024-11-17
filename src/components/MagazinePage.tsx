import { useState } from "react";
import CloudAnimation from "./CloudAnimation";

const MagazinePage = () => {
  const [cloudAnim, setCloudAnim] = useState(false);
  return (
    <div>
      {cloudAnim ? null : <CloudAnimation setCloudAnim={setCloudAnim}/>}
      <div>thisis the mag</div>
    </div>
  );
};

export default MagazinePage;
