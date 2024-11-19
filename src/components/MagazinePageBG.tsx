import {
  BackTrees,
  farTrees,
  frontTrees,
  rocks,
} from "../imports/SecondSection";

const MagazinePageBG = () => {
  return (
    <div className="z-[10] w-full h-screen overflow-hidden absolute">
      <img
        src={farTrees}
        alt="Far Trees"
        className="w-full h-screen absolute bottom-0 left-0 z-10 object-cover"
      />
      <img
        src={BackTrees}
        alt="Back Trees"
        className="w-full h-screen absolute bottom-0 left-0 z-20 object-cover"
      />
      <img
        src={frontTrees}
        alt="Front Trees"
        className="w-full h-screen absolute bottom-0 left-0 z-40 object-cover"
      />
      <img
        src={rocks}
        alt="Rocks"
        className="w-full h-screen absolute bottom-0 left-0 z-10 object-cover"
      />
    </div>
  );
};

export default MagazinePageBG;
