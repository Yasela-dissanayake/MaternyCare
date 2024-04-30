import logo from "../assets/images/logo.png";
import { navLinks } from "../data/Data";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../assets/icons/Icons";

const Drawer = () => {
  return (
    <div>
      <span className="absolute top-5 left-4 cursor-pointer">
        <MenuIcon />
      </span>
      <div className="px-10 py-12 bg-white rounded-r-2xl w-[300px] sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px]  overflow-y-auto">
        <div className="lg:hidden flex justify-end">
          <CloseIcon className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="h-36"></img>
          <h1 className="text-[#F580AB] text-2xl font-medium	">Materny Care</h1>
        </div>

        <div className="mt-10 flex flex-col space-y-8 text-[#666666] ">
          {navLinks.map((item, index) => {
            const match = useMatch(item.path);

            return (
              <NavLink to={item.path} key={index}>
                <button
                  className={`flex items-center space-x-2 py-3 px-3 rounded-xl w-full ${
                    match ? "text-[#0D99FF] bg-[#CAE9FF]" : ""
                  }`}
                >
                  <item.icon />
                  <span className="pl-1 ">{item.name}</span>
                </button>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
