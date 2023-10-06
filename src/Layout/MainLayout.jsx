import { Outlet } from "react-router-dom";
import Category from "../Components/Category/Category";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Category></Category>
    </div>
  );
};

export default MainLayout;
