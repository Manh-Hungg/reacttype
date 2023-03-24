import React from "react";
import { useRoutes } from "react-router-dom";
import Detail from "../component/Detail/Detail";
import HomeLayout from "../pages/homeLayout/HomeLayout";
import HomePage from "../pages/homePage/HomePage";
import Register from "../pages/register/Register";
import RoomDetail from "../pages/RoomDetail/RoomDetail";


export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/room-detail",
          element: <RoomDetail />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return routing;
}
