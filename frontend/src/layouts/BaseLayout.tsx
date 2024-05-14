import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import RightBar from "../components/RightBar";

const BaseLayout = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <Drawer />
      <Outlet />
      <RightBar />
    </div>
  );
};

export default BaseLayout;
