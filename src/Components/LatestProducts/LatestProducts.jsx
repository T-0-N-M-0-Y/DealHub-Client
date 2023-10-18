import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const LatestProducts = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("bestSelling.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mx-2 py-2 my-2 mt-10 border-b-2 border-red-500">
        LATEST PRODUCTS
      </h2>
      <div>
        {featured.slice(0, 6).map((product) => (
          <div key={product.id}>
            <div className="border w-auto h-full flex justify-evenly items-center">
              <img
                src="https://wpbingosite.com/wordpress/dimita/wp-content/webp-express/webp-images/uploads/2019/04/Image-20.jpg.webp"
                alt=""
                className="w-32 h-24"
              />
              <div className="">
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
                <h3 className="text-red-500 font-semibold">${product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
