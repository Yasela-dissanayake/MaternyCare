import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import RightBar from "../components/RightBar";

const BaseLayout = () => {
  return (
    <div className="flex bg-[#F5F5F5]">
      <Drawer />
      <Outlet />
      <RightBar />
    </div>
  );
};

export default BaseLayout;
