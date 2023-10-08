import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
const BestSelling = () => {
  const [bestSells, setBestSells] = useState([]);

  useEffect(() => {
    fetch("bestSelling.json")
      .then((res) => res.json())
      .then((data) => setBestSells(data));
  }, []);
  return (
    <div className="grid grid-cols-5 gap-2">
      {bestSells.map((bestSell) => (
        <div key={bestSell.id}>
          <div className="border w-auto h-full">
            <img
              src="https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
              alt=""
              className="p-4 bg-slate-200"
            />
            <div className="pl-8 my-4">
              <Rating
                placeholderRating={bestSell.rating}
                readonly
                emptySymbol={<FaRegStar className="text-xs"></FaRegStar>}
                placeholderSymbol={
                  <FaStar className="text-yellow-400 text-xs"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <h3 className="text-sm font-semibold">{bestSell.name}</h3>
              <h3 className="text-red-500 font-semibold">${bestSell.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSelling;
