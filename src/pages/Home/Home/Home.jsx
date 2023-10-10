import Category from "../../../Components/Category/Category";
import LatestProducts from "../../../Components/LatestProducts/LatestProducts";
import NewArrivals from "../../../Components/NewArrivals/NewArrivals";
import RecentProducts from "../../../Components/Recent/RecentProducts";
import SomeInfo from "../../../Components/SomeInfo/SomeInfo";
import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import { Header } from "../Header/Header";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="pb-6">
        <Header></Header>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-5 gap-2">
          {/* Categories */}
          <div className="">
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
              <div className=" p-2">
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
