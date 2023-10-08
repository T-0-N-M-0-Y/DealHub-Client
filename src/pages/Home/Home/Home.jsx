import Category from "../../../Components/Category/Category";
import RecentProducts from "../../../Components/Recent/RecentProducts";
import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="p-2">
        <div className="grid grid-cols-5 gap-2">
          {/* Categories */}
          <div className="border-2 p-2">
            <Category></Category>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-2">
              {/* Cover Page */}
              <div className="col-span-3">
                <Navbar></Navbar>
                <Banner></Banner>
              </div>

              {/*Recent Products */}
              <div className="border-2 p-2">
                <h2 className="text-2xl font-semibold mb-2">Recent Products</h2>
                <RecentProducts></RecentProducts>
              </div>
            </div>

            <BestProducts></BestProducts>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
