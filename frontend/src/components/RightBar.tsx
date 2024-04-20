import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import MUICalendar from "./MUICalendar";

const Drawer: React.FC = () => {
  return (
    <div className="px-6 pt-4 flex flex-col border border-r-0 w-85 h-screen ml-auto ">
      <div className="grid grid-cols-3 gap-4 items-center mx-5">
        <div>
          <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={5} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="show new notifications" color="inherit">
            <SettingsIcon />
          </IconButton>
        </div>
        <div className="bg-[#EAEEFD] flex justify-center items-center rounded-xl w-16 h-16 p-2">
          <img
            className="rounded-full border-2 border-white "
            src="https://randomuser.me/api/portraits/women/94.jpg"
          />
        </div>
      </div>
      <div className="bg-[#F7FBFF] rounded-2xl text-center py-4 px-8 mt-24">
        <div className="justify-center flex">
          <img
            className="rounded-full border-2 border-white w-24 h-24"
            src="https://randomuser.me/api/portraits/women/94.jpg"
          />
        </div>
        <h1 className="text-[#0D99FF] font-medium text-lg">
          Ushani Anuruddhika
        </h1>
        <p className="text-xs text-[#666666]">
          30 years old
          <span className="border-l-2 ml-2 px-1">
            <LocationOnIcon style={{ fontSize: 16 }} />
          </span>
          Badulla, Srilanka
        </p>
        <div className="grid grid-cols-3 text-[#333333] mt-8 mb-2">
          <div className="border-r-2 px-4">
            <p className="text-xs">Blodd</p>
            <p className="text-lg font-semibold">O+</p>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-xs">Height</p>
            <p className="text-lg font-semibold">186cm</p>
          </div>
          <div className="px-4">
            <p className="text-xs">Weight</p>
            <p className="text-lg font-semibold">90kgs</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <MUICalendar />
      </div>
      <div>4</div>
    </div>
  );
};

export default Drawer;
