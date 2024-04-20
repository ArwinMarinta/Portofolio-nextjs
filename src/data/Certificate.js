import Certi1 from "@/assets/certificate/dart.svg";
import Certi2 from "@/assets/certificate/msib.svg";
import Certi3 from "@/assets/certificate/devOps.svg";
import Certi4 from "@/assets/certificate/dasar_js.svg";

export const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const DataCertificate = [
  {
    id: 1,
    image: Certi1,
  },
  {
    id: 2,
    image: Certi2,
  },
  {
    id: 3,
    image: Certi3,
  },
  {
    id: 4,
    image: Certi4,
  },
];
