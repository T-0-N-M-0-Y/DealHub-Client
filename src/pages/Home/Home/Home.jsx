import Category from "../../../Components/Category/Category";
import LatestProducts from "../../../Components/LatestProducts/LatestProducts";
import NewArrivals from "../../../Components/NewArrivals/NewArrivals";
import RecentProducts from "../../../Components/Recent/RecentProducts";
import SomeInfo from "../../../Components/SomeInfo/SomeInfo";
import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import Brands from "../Brands/Brands";
import ElectronicsItems from "../ElectronicsItems/ElectronicsItems";
import { Header } from "../Header/Header";

import Navbar from "../Navbar/Navbar";
import ShopNow from "../ShopNow/ShopNow";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <div className="pb-6 ">
        <Header></Header>
      </div>
      <div className="my-container hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {/* Categories */}
          <div>
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
              <div className=" p-1">
                <RecentProducts></RecentProducts>
              </div>
            </div>
            <NewArrivals></NewArrivals>
            <BestProducts></BestProducts>
            <ShopNow></ShopNow>
          </div>
        </div>
        <ElectronicsItems></ElectronicsItems>
        <Brands></Brands>
        <Subscribe></Subscribe>
      </div>



      {/* Mobile  */}
      <div className="mobile lg:hidden">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className=" p-1 mt-4">
          <RecentProducts></RecentProducts>
        </div>
        <LatestProducts></LatestProducts>
        <SomeInfo></SomeInfo>

        <NewArrivals></NewArrivals>
        <BestProducts></BestProducts>
        <ShopNow></ShopNow>

        <ElectronicsItems></ElectronicsItems>
        <Brands></Brands>
        <Subscribe></Subscribe>
      </div>
    </>
  );
};

export default Home;
