import img1 from "../../../assets/Shop Now/Banner-5.jpg.webp";
import img2 from "../../../assets/Shop Now/Banner-6.jpg.webp";
import img3 from "../../../assets/Shop Now/Banner-7.jpg.webp";
const ShopNow = () => {
  return (
    <div className="mx-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src={img1}
          alt=""
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
        />
        <img
          src={img2}
          alt=""
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
        />
        <img
          src={img3}
          alt=""
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
        />
      </div>
    </div>
  );
};

export default ShopNow;
