import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login&SignIn/Login";
import SignUp from "../Login&SignIn/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
]);
export default router;
