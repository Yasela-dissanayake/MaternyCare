import React from "react";
import logo from "../assets/images/logo.png";
import {
  AppointmentsIcon,
  DashboardIcon,
  NoticesIcon,
  ProfileIcon,
} from "../assets/icons/Icons";
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
];

const Drawer = () => {
  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-80 h-screen">
      <div className="logo-div flex space-x-3 items-center">
        <img src={logo} className=""></img>
        <span>Materny Care</span>
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
