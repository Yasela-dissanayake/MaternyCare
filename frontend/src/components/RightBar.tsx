import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

const Drawer: React.FC = () => {
  return (
    <div className="px-10 py-12 flex flex-col border border-r-0 w-80 h-screen ml-auto">
      <div className="grid grid-cols-3 gap-4 items-center">
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
        <h1>Ushani Anuruddhika</h1>
        <p className="text-xs">
          30 years old |
          <span>
            <NotificationsNoneIcon />
          </span>
          Badulla, Srilanka
        </p>
        <div className="flex flex-row justify-evenly">
          <div>
            <p>Blodd</p>
            <p>O+</p>
          </div>
          <div>
            <p>Blodd</p>
            <p>O+</p>
          </div>
          <div>
            <p>Blodd</p>
            <p>O+</p>
          </div>
        </div>
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Drawer;
