import logo from "../assets/images/logo.png";
import {
  AppointmentsIcon,
  DashboardIcon,
  NoticesIcon,
  ProfileIcon,
  LogoutIcon,
} from "../assets/icons/Icons";
import { useState } from "react";
const navLinks = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Notices",
    icon: <NoticesIcon />,
  },
  {
    name: "Appointments",
    icon: <AppointmentsIcon />,
  },
  {
    name: "Profile",
    icon: <ProfileIcon />,
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
  },
];

const Drawer = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-80 h-screen">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} className="h-36"></img>
        <h1 className="text-[#F580AB] text-2xl font-medium	">Materny Care</h1>
      </div>

      <div className="mt-10 flex flex-col space-y-8 text-[#666666] ">
        {navLinks.map((item, index) => (
          <button
            onClick={() => setActiveLink(index)}
            key={index}
            className={`flex items-center space-x-2 py-3 px-3 rounded-xl	 ${
              activeLink == index ? "text-[#0D99FF] bg-[#CAE9FF]" : ""
            }`}
          >
            {item.icon}
            <span className="pl-1 ">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
