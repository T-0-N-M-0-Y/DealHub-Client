import Category from "../../../Components/Category/Category";
import RecentProducts from "../../../Components/Recent/RecentProducts";
import Banner from "../Banner/Banner";
import { Header } from "../Header/Header";


const Home = () => {
  return (
    <>
    <Header></Header>
      <div className="min-h-screen p-2">
        <div className="grid grid-cols-5 gap-2">
          {/* Categories */}
          <div className=" p-4 border-4">
            <Category></Category>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-2">
              {/* Cover Page */}
              <div className="col-span-3 p-4  border-4">
                <h2 className="text-2xl font-semibold mb-2">Cover Page</h2>
                <Banner></Banner>
              </div>

              {/*Recent Products */}
              <div className=" p-4 border-4">
                <h2 className="text-2xl font-semibold mb-2">Recent Products</h2>
                <RecentProducts></RecentProducts>
              </div>
            </div>
            {/* Category with icon */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
