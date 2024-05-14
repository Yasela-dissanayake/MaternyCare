import logo from "../assets/images/logo.png";
import { navLinks } from "../data/Data";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../assets/icons/Icons";
import { Disclosure } from "@headlessui/react";

const Drawer = () => {
  return (
    <div>
      {/* <span
        className="absolute top-5 left-4 cursor-pointer lg:hidden block"
        onClick={handleMenu}
      >
        <MenuIcon />
      </span>
      <div
        className={`px-10 py-12 bg-white rounded-r-2xl w-[300px]  sidebar fixed top-0 bottom-0 overflow-y-auto ${
          !isOpen ? "left-[-300px]" : "left-0"
        }`}
      >
        <div className="lg:hidden flex justify-end" onClick={handleMenu}>
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
     */}

      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-5 right-10 cursor-pointer peer inline-flex focus:outline-none lg:hidden">
          <MenuIcon />
        </Disclosure.Button>

        <div
          // className={`px-10 py-12 bg-white rounded-r-2xl w-[300px]  fixed top-0 bottom-0 overflow-y-auto  `}
          className=" px-10 py-12 w-[300px] h-screen bg-white z-20 fixed top-0 -left-[300px] lg:w-70 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
        >
          <div className="flex flex-col items-center justify-center">
            <img src={logo} className="h-36"></img>
            <h1 className="text-[#F580AB] text-2xl font-medium	">
              Materny Care
            </h1>
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
      </Disclosure>
    </div>
  );
};

export default Drawer;
