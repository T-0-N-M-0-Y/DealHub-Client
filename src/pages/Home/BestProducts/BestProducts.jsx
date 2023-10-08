import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BestSelling from "./BestSelling";
import FeaturedProducts from "./FeaturedProducts";
import { useState } from "react";
import { Link } from "react-router-dom";

const BestProducts = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Tabs className="my-10 mx-4">
      <TabList>
        <div className="flex gap-4 border-b-4 pb-2">
          <Tab>
            <Link
              className={`flex items-center text-sm font-semibold ${
                activeTab == "addClass"
                  ? "font-extrabold border-b-4 border-red-500"
                  : ""
              } `}
              onClick={() => handleTabClick("addClass")}
            >
              BEST SEELING
            </Link>
          </Tab>
          <Tab>
            <Link
              className={`flex items-center text-sm font-semibold  ${
                activeTab == "myClass"
                  ? "font-extrabold border-b-4 border-red-500"
                  : ""
              } `}
              onClick={() => handleTabClick("myClass")}
            >
              FEATURED
            </Link>
          </Tab>
        </div>
      </TabList>

      <TabPanel>
        <BestSelling></BestSelling>
      </TabPanel>
      <TabPanel>
        <FeaturedProducts></FeaturedProducts>
      </TabPanel>
    </Tabs>
  );
};

export default BestProducts;
