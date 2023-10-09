// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const NewArrivals = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("bestSelling.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mt-10 border-b-4 border-red-500 lg:mr-[1000px]">
        NEW ARRIVALS
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {featured.map((product) => (
          <div key={product.id}>
            <SwiperSlide>
              <div className="border w-auto h-full">
                <img
                  src="https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
                  alt=""
                  className="p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                />
                <div className="pl-8 my-4">
                  <Rating
                    placeholderRating={product.rating}
                    readonly
                    emptySymbol={<FaRegStar className="text-xs"></FaRegStar>}
                    placeholderSymbol={
                      <FaStar className="text-yellow-400 text-xs"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <h3 className="text-red-500 font-semibold">
                    ${product.price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivals;
