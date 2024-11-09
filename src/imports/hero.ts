import KGEC from "../assets/Hero/KGEC.png";
import Cloud01 from "../assets/Hero/Cloud01.png";
import Cloud02 from "../assets/Hero/Cloud02.png";
import Cloud03 from "../assets/Hero/Cloud03.png";
import Cloud04 from "../assets/Hero/Cloud04.png";
import Cloud05 from "../assets/Hero/Cloud05.png";
import Cloud06 from "../assets/Hero/Cloud06.png";
import Cloud07 from "../assets/Hero/Cloud07.png";
import Cloud08 from "../assets/Hero/Cloud08.png";
import OpenCloudLeft from "../assets/Hero/OpeningCloud Left.png";
import OpenCLoudRight from "../assets/Hero/OpeningCloud Right.png";

// Define the type for the cloud objects
interface Cloud {
  cloud: string; // URL or path of the cloud image
  pos: string; // Position as a string (e.g., 'top-0', 'bottom-0')
  index: number; // z-index value
}

// Define the cloudsLeft and cloudsRight arrays with proper types
const cloudsLeft: Cloud[] = [
  {
    cloud: Cloud04,
    pos: "bottom-0",
    index: 10,
  },
  {
    cloud: Cloud03,
    pos: "bottom-0",
    index: 10,
  },
  {
    cloud: Cloud02,
    pos: "top-0",
    index: 20,
  },
  {
    cloud: Cloud01,
    pos: "bottom-0",
    index: 20,
  },
];

const cloudsRight: Cloud[] = [
  {
    cloud: Cloud08,
    pos: "bottom-0",
    index: 10,
  },
  {
    cloud: Cloud05,
    pos: "top-0",
    index: 20,
  },
  {
    cloud: Cloud06,
    pos: "bottom-20",
    index: 20,
  },
  {
    cloud: Cloud07,
    pos: "top-40",
    index: 20,
  },
];

const allClouds = [
  {
    cloud: Cloud01
  },
  {
    cloud: Cloud02
  },
  {
    cloud: Cloud03
  },
  {
    cloud: Cloud04
  },
  {
    cloud: Cloud05
  },
  {
    cloud: Cloud06
  },
  {
    cloud: Cloud07
  },
  {
    cloud: Cloud08
  },
  {
    cloud: KGEC
  },
  {
    cloud: OpenCLoudRight
  },
  {
    cloud: OpenCloudLeft
  },
]

export { KGEC, cloudsLeft, cloudsRight, OpenCLoudRight, OpenCloudLeft, allClouds };
