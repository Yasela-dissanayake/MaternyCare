import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

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
          {/* <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/women/94.jpg"
            sx={{}}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
