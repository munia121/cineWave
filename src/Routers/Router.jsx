import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import Ourservices from "../Component/HomeCoponent/Ourservices";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<HomePage></HomePage>
        },
        // {
        //   path:'services',
        //   element:<Ourservices></Ourservices>
        // }
      ]
    },
  ]);