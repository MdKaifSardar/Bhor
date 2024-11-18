import { useState } from "react";
import CloudAnimation from "./CloudAnimation";

const MagazinePage2024 = () => {
  const [cloudAnim, setCloudAnim] = useState(false);
  return (
    <div>
      {cloudAnim ? null : <CloudAnimation delay={0} setCloudAnim={setCloudAnim}/>}
      <div>thisis the mag</div>
    </div>
  );
};

export default MagazinePage2024;
