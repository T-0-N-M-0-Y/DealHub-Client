import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Brand/brand1-1.png.webp";
import img2 from "../../../assets/Brand/brand3-2.png.webp";
import img3 from "../../../assets/Brand/brand4-3.png.webp";
import img4 from "../../../assets/Brand/brand5-3.png.webp";
const Brands = () => {
  return (
    <div>
      <Marquee>
        <img src={img1} alt="" className="w-64 h-48 mr-5 border p-8" />
        <img src={img2} alt="" className="w-64 h-48 mr-5 border p-8" />
        <img src={img3} alt="" className="w-64 h-48 mr-5 border p-8" />
        <img src={img4} alt="" className="w-64 h-48 mr-5 border p-8" />
      </Marquee>
    </div>
  );
};

export default Brands;
