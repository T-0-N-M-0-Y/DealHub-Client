import Category from "../../../Components/Category/Category";
import LatestProducts from "../../../Components/LatestProducts/LatestProducts";
import NewArrivals from "../../../Components/NewArrivals/NewArrivals";
import RecentProducts from "../../../Components/Recent/RecentProducts";
import SomeInfo from "../../../Components/SomeInfo/SomeInfo";
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
            <LatestProducts></LatestProducts>
            <SomeInfo></SomeInfo>
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
            <NewArrivals></NewArrivals>
            <BestProducts></BestProducts>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
