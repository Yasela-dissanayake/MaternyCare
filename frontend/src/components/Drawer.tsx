import logo from "../assets/images/logo.png";
import { navLinks } from "../data/Data";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

import React, { useEffect } from "react";
import { MenuIcon } from "../assets/icons/Icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material//styles";

const Drawer: React.FC = () => {
  const LARGE_SCREEN_WIDTH = 1024;

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [isDrawerOpen, setDrawerOpen] = React.useState(isLargeScreen);

  const checkScreenSize = () => {
    if (window.innerWidth >= LARGE_SCREEN_WIDTH) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {/* Drawer init and show */}
      <div className="text-center absolute right-3 top-5 lg:hidden ">
        <button
          className="text-[#0D99FF] bg-[#B3DFFF] focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          <MenuIcon className="" />
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-8 overflow-y-auto transition-transform w-[300px] ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="h-36"></img>
          <h1 className="text-[#F580AB] text-2xl font-medium	">Materny Care</h1>
        </div>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent lg:hidden hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
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
<<<<<<< HEAD
     */}

      <Disclosure as="nav">
<<<<<<< HEAD
        <Disclosure.Button className="absolute top-5 right-10 cursor-pointer peer inline-flex focus:outline-none lg:hidden">
=======
        <Disclosure.Button className="absolute top-5 right-4 cursor-pointer peer inline-flex focus:outline-none lg:hidden">
>>>>>>> 40c0594e (feat: redesigned drawer with headless UI disclosure component)
          <MenuIcon />
        </Disclosure.Button>

        <div
          // className={`px-10 py-12 bg-white rounded-r-2xl w-[300px]  fixed top-0 bottom-0 overflow-y-auto  `}
          className=" px-10 py-12 w-[300px] h-screen bg-white z-20 fixed top-0 -left-[300px] lg:w-70 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
        >
<<<<<<< HEAD
=======
          {/* <div className="lg:hidden flex justify-end">
            <CloseIcon className="cursor-pointer" />
          </div> */}
>>>>>>> 40c0594e (feat: redesigned drawer with headless UI disclosure component)
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
=======
>>>>>>> 9746e76b (feat:headlessui drawer removed and flowbite drawer added)
    </div>
  );
};

export default Drawer;

// import { MenuIcon } from "../assets/icons/Icons";
// import { Disclosure } from "@headlessui/react";
// import { IconButton } from "@mui/material";

// const Drawer = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Disclosure
//         as="nav"
//         // onAuxClick={(event: React.MouseEvent<HTMLElement>) =>
//         //   setIsOpen(!isOpen)
//         // }
//       >
//         <Disclosure.Button
//           onClick={() => setIsOpen(!isOpen)}
//           className="absolute top-5 right-10 cursor-pointer peer inline-flex focus:outline-none lg:hidden"
//         >
//           <MenuIcon sx={{ width: "40px", height: "40px" }} />
//         </Disclosure.Button>

//         <div
//           // className={`px-10 py-12 bg-white rounded-r-2xl w-[300px]  fixed top-0 bottom-0 overflow-y-auto  `}
//           className=" px-10 py-12 w-[300px] h-screen bg-white z-20 fixed top-0 -left-[300px] lg:w-70 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
//         >
// <div className="flex flex-col items-center justify-center">
//   <img src={logo} className="h-36"></img>
//   <h1 className="text-[#F580AB] text-2xl font-medium	">
//     Materny Care
//   </h1>
// </div>

//           <div className="mt-10 flex flex-col space-y-8 text-[#666666] ">
//             {navLinks.map((item, index) => {
//               const match = useMatch(item.path);

//               return (
//                 <NavLink to={item.path} key={index}>
//                   <button
//                     className={`flex items-center space-x-2 py-3 px-3 rounded-xl w-full ${
//                       match ? "text-[#0D99FF] bg-[#CAE9FF]" : ""
//                     }`}
//                   >
//                     <item.icon />
//                     <span className="pl-1 ">{item.name}</span>
//                   </button>
//                 </NavLink>
//               );
//             })}
//           </div>
//         </div>
//       </Disclosure>
//     </div>
//   );
// };

// export default Drawer;
